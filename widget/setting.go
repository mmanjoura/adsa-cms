package widget

import (
	"reflect"
	"time"

	"github.com/jinzhu/gorm"
	"github.com/mmanjoura/adsa-cms/admin"
	"github.com/mmanjoura/adsa-cms/qor"
	"github.com/mmanjoura/adsa-cms/qor/resource"
	"github.com/mmanjoura/adsa-cms/qor/utils"
	"github.com/mmanjoura/adsa-cms/roles"
	"github.com/mmanjoura/adsa-cms/serializable_meta"
)

type QorWidgetSettingInterface interface {
	GetWidgetName() string
	SetWidgetName(string)
	GetGroupName() string
	SetGroupName(string)
	GetScope() string
	SetScope(string)
	GetTemplate() string
	SetTemplate(string)
	serializable_meta.SerializableMetaInterface
}

// QorWidgetSetting default qor widget setting struct
type QorWidgetSetting struct {
	Name        string `gorm:"primary_key"`
	WidgetType  string `gorm:"primary_key"`
	Scope       string `gorm:"primary_key;default:'default'"`
	GroupName   string
	ActivatedAt *time.Time
	Template    string
	serializable_meta.SerializableMeta
	CreatedAt time.Time
	UpdatedAt time.Time
}

func (widgetSetting *QorWidgetSetting) ResourceName() string {
	return "Widget Content"
}

func (widgetSetting *QorWidgetSetting) BeforeCreate() {
	now := time.Now()
	widgetSetting.ActivatedAt = &now
}

func (widgetSetting *QorWidgetSetting) BeforeUpdate(scope *gorm.Scope) error {
	value := reflect.New(scope.GetModelStruct().ModelType).Interface()
	return scope.NewDB().Model(value).Where("name = ? AND scope = ?", widgetSetting.Name, widgetSetting.Scope).UpdateColumn("activated_at", gorm.Expr("NULL")).Error
}

func (widgetSetting *QorWidgetSetting) GetSerializableArgumentKind() string {
	if widgetSetting.WidgetType != "" {
		return widgetSetting.WidgetType
	}
	return widgetSetting.Kind
}

func (widgetSetting *QorWidgetSetting) SetSerializableArgumentKind(name string) {
	widgetSetting.WidgetType = name
	widgetSetting.Kind = name
}

// GetWidgetName get widget setting's group name
func (qorWidgetSetting QorWidgetSetting) GetWidgetName() string {
	return qorWidgetSetting.Name
}

// SetWidgetName set widget setting's group name
func (qorWidgetSetting *QorWidgetSetting) SetWidgetName(name string) {
	qorWidgetSetting.Name = name
}

// GetGroupName get widget setting's group name
func (qorWidgetSetting QorWidgetSetting) GetGroupName() string {
	return qorWidgetSetting.GroupName
}

// SetGroupName set widget setting's group name
func (qorWidgetSetting *QorWidgetSetting) SetGroupName(groupName string) {
	qorWidgetSetting.GroupName = groupName
}

// GetScope get widget's scope
func (qorWidgetSetting QorWidgetSetting) GetScope() string {
	return qorWidgetSetting.Scope
}

// SetScope set widget setting's scope
func (qorWidgetSetting *QorWidgetSetting) SetScope(scope string) {
	qorWidgetSetting.Scope = scope
}

// GetTemplate get used widget template
func (qorWidgetSetting QorWidgetSetting) GetTemplate() string {
	if widget := GetWidget(qorWidgetSetting.GetSerializableArgumentKind()); widget != nil {
		for _, value := range widget.Templates {
			if value == qorWidgetSetting.Template {
				return value
			}
		}

		// return first value of defined widget templates
		for _, value := range widget.Templates {
			return value
		}
	}
	return ""
}

// SetTemplate set used widget's template
func (qorWidgetSetting *QorWidgetSetting) SetTemplate(template string) {
	qorWidgetSetting.Template = template
}

// GetSerializableArgumentResource get setting's argument's resource
func (qorWidgetSetting *QorWidgetSetting) GetSerializableArgumentResource() *admin.Resource {
	widget := GetWidget(qorWidgetSetting.GetSerializableArgumentKind())
	if widget != nil {
		return widget.Setting
	}
	return nil
}

// ConfigureQorResource a method used to config Widget for qor admin
func (qorWidgetSetting *QorWidgetSetting) ConfigureQorResource(res resource.Resourcer) {
	if res, ok := res.(*admin.Resource); ok {
		res.Meta(&admin.Meta{Name: "Name", Permission: roles.Deny(roles.Update, roles.Anyone)})

		res.Meta(&admin.Meta{
			Name: "ActivatedAt",
			Type: "hidden",
			Valuer: func(result interface{}, context *qor.Context) interface{} {
				return time.Now()
			},
		})

		res.Meta(&admin.Meta{
			Name: "Scope",
			Type: "hidden",
			Valuer: func(result interface{}, context *qor.Context) interface{} {
				if scope := context.Request.URL.Query().Get("widget_scope"); scope != "" {
					return scope
				}

				if setting, ok := result.(QorWidgetSettingInterface); ok {
					if scope := setting.GetScope(); scope != "" {
						return scope
					}
				}

				return "default"
			},
			Setter: func(result interface{}, metaValue *resource.MetaValue, context *qor.Context) {
				if setting, ok := result.(QorWidgetSettingInterface); ok {
					setting.SetScope(utils.ToString(metaValue.Value))
				}
			},
		})

		res.Meta(&admin.Meta{
			Name: "Widgets",
			Type: "select_one",
			Valuer: func(result interface{}, context *qor.Context) interface{} {
				if typ := context.Request.URL.Query().Get("widget_type"); typ != "" {
					return typ
				}

				if setting, ok := result.(QorWidgetSettingInterface); ok {
					return GetWidget(setting.GetSerializableArgumentKind()).Name
				}

				return ""
			},
			Collection: func(result interface{}, context *qor.Context) (results [][]string) {
				if setting, ok := result.(QorWidgetSettingInterface); ok {
					groupName := setting.GetGroupName()
					for _, group := range registeredWidgetsGroup {
						if group.Name == groupName {
							for _, widget := range group.Widgets {
								results = append(results, []string{widget, widget})
							}
						}
					}

					if len(results) == 0 {
						results = append(results, []string{setting.GetSerializableArgumentKind(), setting.GetSerializableArgumentKind()})
					}
				}
				return
			},
			Setter: func(result interface{}, metaValue *resource.MetaValue, context *qor.Context) {
				if setting, ok := result.(QorWidgetSettingInterface); ok {
					setting.SetSerializableArgumentKind(utils.ToString(metaValue.Value))
				}
			},
		})

		res.Meta(&admin.Meta{
			Name: "Template",
			Type: "select_one",
			Valuer: func(result interface{}, context *qor.Context) interface{} {
				if setting, ok := result.(QorWidgetSettingInterface); ok {
					return setting.GetTemplate()
				}
				return ""
			},
			Collection: func(result interface{}, context *qor.Context) (results [][]string) {
				if setting, ok := result.(QorWidgetSettingInterface); ok {
					if widget := GetWidget(setting.GetSerializableArgumentKind()); widget != nil {
						for _, value := range widget.Templates {
							results = append(results, []string{value, value})
						}
					}
				}
				return
			},
			Setter: func(result interface{}, metaValue *resource.MetaValue, context *qor.Context) {
				if setting, ok := result.(QorWidgetSettingInterface); ok {
					setting.SetTemplate(utils.ToString(metaValue.Value))
				}
			},
		})

		res.UseTheme("widget")

		res.IndexAttrs("Name", "CreatedAt", "UpdatedAt")
		res.ShowAttrs("Name", "Scope", "WidgetType", "Template", "Value", "CreatedAt", "UpdatedAt")
		res.EditAttrs(
			"Scope", "ActivatedAt", "Widgets", "Template",
			&admin.Section{
				Title: "Settings",
				Rows:  [][]string{{"Kind"}, {"SerializableMeta"}},
			},
		)
	}
}
