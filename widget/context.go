package widget

import (
	"fmt"
	"html/template"
	"reflect"

	"github.com/jinzhu/gorm"
	"github.com/mmanjoura/adsa-cms/qor/utils"
)

// NewContext new widget context
func NewContext(options map[string]interface{}) *Context {
	return &Context{
		Options: options,
	}
}

// Context widget context
type Context struct {
	Widgets          *Widgets
	DB               *gorm.DB
	InlineEdit       bool
	AvailableWidgets []string
	Options          map[string]interface{}
}

// Get get option with name
func (context Context) Get(name string) (interface{}, bool) {
	if value, ok := context.Options[name]; ok {
		return value, true
	}

	return nil, false
}

// Set set option by name
func (context *Context) Set(name string, value interface{}) {
	if context.Options == nil {
		context.Options = map[string]interface{}{}
	}
	context.Options[name] = value
}

// GetDB set option by name
func (context *Context) GetDB() *gorm.DB {
	if context.DB != nil {
		return context.DB
	}
	return context.Widgets.Config.DB
}

// Render render widget based on context
func (context *Context) Render(widgetName string, widgetGroupName string) template.HTML {
	var (
		visibleScopes         []string
		widgets               = context.Widgets
		widgetSettingResource = widgets.WidgetSettingResource
	)

	for _, scope := range registeredScopes {
		if scope.Visible(context) {
			visibleScopes = append(visibleScopes, scope.ToParam())
		}
	}

	if setting := context.findWidgetSetting(widgetName, append(visibleScopes, "default"), widgetGroupName); setting != nil {
		var (
			prefix        = widgetSettingResource.GetAdmin().GetRouter().Prefix
			widgetObj     = GetWidget(setting.GetSerializableArgumentKind())
			widgetSetting = widgetObj.Context(context, setting.GetSerializableArgument(setting))
			inlineEditURL = fmt.Sprintf("%v/%v/%v/edit?widget_scope=%v", prefix, widgetSettingResource.ToParam(), setting.GetWidgetName(), setting.GetScope())
		)

		if context.InlineEdit {
			prefix := widgets.Resource.GetAdmin().GetRouter().Prefix

			return template.HTML(fmt.Sprintf(
				"<script data-prefix=\"%v\" src=\"%v/assets/javascripts/widget_check.js?theme=widget\"></script><div class=\"qor-widget qor-widget-%v\" data-widget-inline-edit-url=\"%v\" data-url=\"%v\">\n%v\n</div>",
				prefix,
				prefix,
				utils.ToParamString(widgetObj.Name),
				fmt.Sprintf("%v/%v/inline-edit", prefix, widgets.Resource.ToParam()),
				inlineEditURL,
				widgetObj.Render(widgetSetting, setting.GetTemplate()),
			))
		}

		return widgetObj.Render(widgetSetting, setting.GetTemplate())
	}

	return template.HTML("")
}

func (context *Context) findWidgetSetting(widgetName string, scopes []string, widgetGroupName string) QorWidgetSettingInterface {
	var (
		db                    = context.GetDB()
		widgetSettingResource = context.Widgets.WidgetSettingResource
		setting               QorWidgetSettingInterface
		settings              = widgetSettingResource.NewSlice()
	)

	db.Where("name = ? AND scope IN (?)", widgetName, scopes).Order("activated_at DESC").Find(settings)

	settingsValue := reflect.Indirect(reflect.ValueOf(settings))
	if settingsValue.Len() > 0 {
	OUTTER:
		for _, scope := range scopes {
			for i := 0; i < settingsValue.Len(); i++ {
				s := settingsValue.Index(i).Interface().(QorWidgetSettingInterface)
				if s.GetScope() == scope {
					setting = s
					break OUTTER
				}
			}
		}
	}

	if setting == nil {
		setting = widgetSettingResource.NewStruct().(QorWidgetSettingInterface)
		setting.SetGroupName(widgetGroupName)
		setting.SetSerializableArgumentKind(widgetGroupName)
		db.Create(setting)
	} else if setting.GetGroupName() != widgetGroupName {
		setting.SetGroupName(widgetGroupName)
		db.Save(setting)
	}

	return setting
}
