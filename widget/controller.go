package widget

import (
	"net/http"
	"reflect"

	"github.com/jinzhu/gorm"
	"github.com/mmanjoura/adsa-cms/admin"
	"github.com/mmanjoura/adsa-cms/responder"
	"github.com/mmanjoura/adsa-cms/serializable_meta"
)

type widgetController struct {
	Widgets *Widgets
}

func (wc widgetController) Index(context *admin.Context) {
	context = context.NewResourceContext(wc.Widgets.WidgetSettingResource)
	result, _, err := wc.getWidget(context)
	context.AddError(err)

	if context.HasError() {
		http.NotFound(context.Writer, context.Request)
	} else {
		responder.With("html", func() {
			context.Execute("index", result)
		}).With("json", func() {
			context.JSON("index", result)
		}).Respond(context.Request)
	}
}

func (wc widgetController) Edit(context *admin.Context) {
	context.Resource = wc.Widgets.WidgetSettingResource
	widgetSetting, scopes, err := wc.getWidget(context)
	context.AddError(err)
	context.Execute("edit", map[string]interface{}{"Scopes": scopes, "Widget": widgetSetting})
}

func (wc widgetController) Update(context *admin.Context) {
	context.Resource = wc.Widgets.WidgetSettingResource
	widgetSetting, scopes, err := wc.getWidget(context)
	context.AddError(err)

	if context.AddError(context.Resource.Decode(context.Context, widgetSetting)); !context.HasError() {
		context.AddError(context.Resource.CallSave(widgetSetting, context.Context))
	}

	if context.HasError() {
		context.Writer.WriteHeader(admin.HTTPUnprocessableEntity)
		context.Execute("edit", map[string]interface{}{"Scopes": scopes, "Widget": widgetSetting})
	} else {
		http.Redirect(context.Writer, context.Request, context.Request.URL.Path, http.StatusFound)
	}
}

func (wc widgetController) InlineEdit(context *admin.Context) {
	context.Writer.Write([]byte(context.Render("inline_edit")))
}

func (wc widgetController) getWidget(context *admin.Context) (interface{}, []string, error) {
	if context.ResourceID == "" {
		scope := context.Request.URL.Query().Get("widget_scope")
		if scope == "" {
			scope = "default"
		}

		// index page
		context.SetDB(context.GetDB().Where("scope = ? AND activated_at IS NOT NULL", scope).Order("activated_at DESC"))
		results, err := context.FindMany()
		return results, []string{}, err
	}

	// show page
	var (
		widgetSettings  = wc.Widgets.WidgetSettingResource.NewSlice()
		selectedSetting *QorWidgetSetting
		scopes          []string
		result          = wc.Widgets.WidgetSettingResource.NewStruct()
		scope           = context.Request.URL.Query().Get("widget_scope")
		widgetType      = context.Request.URL.Query().Get("widget_type")
	)

	if scope == "" {
		scope = context.Request.Form.Get("QorResource.Scope")
	}

	if widgetType == "" {
		widgetType = context.Request.Form.Get("QorResource.Kind")
	}

	if scope == "" {
		scope = "default"
	}

	context.GetDB().Model(result).Where("name = ?", context.ResourceID).Order(gorm.Expr("scope = ?, activated_at IS NULL", "default")).Find(widgetSettings)

	widgetSettingsValues := reflect.Indirect(reflect.ValueOf(widgetSettings))
	for i := 0; i < widgetSettingsValues.Len(); i++ {
		setting := widgetSettingsValues.Index(i).Interface().(QorWidgetSettingInterface)
		if setting.GetSerializableArgumentKind() == widgetType {
			selectedSetting = &QorWidgetSetting{Name: context.ResourceID, Scope: setting.GetScope(), WidgetType: widgetType}
			if setting.GetScope() == scope {
				break
			}
		}
	}

	if selectedSetting == nil {
		selectedSetting = &QorWidgetSetting{Name: context.ResourceID, Scope: "default"}
	}

	err := context.GetDB().Order("activated_at IS NULL").First(result, selectedSetting).Error

	if widgetType != "" {
		if serializableMeta, ok := result.(serializable_meta.SerializableMetaInterface); ok && serializableMeta.GetSerializableArgumentKind() != widgetType {
			serializableMeta.SetSerializableArgumentKind(widgetType)
			serializableMeta.SetSerializableArgumentValue(nil)
		}
	}
	return result, scopes, err
}
