package admin

import (
	"time"

	"github.com/mmanjoura/adsa-cms/qor"
)

var metaConfigorMaps = map[string]func(*Meta){
	"date": func(meta *Meta) {
		if meta.FormattedValuer == nil {
			meta.SetFormattedValuer(func(value interface{}, context *qor.Context) interface{} {
				switch date := meta.GetValuer()(value, context).(type) {
				case *time.Time:
					if date == nil {
						return ""
					}
					if date.IsZero() {
						return ""
					}
					return date.Format("2006-01-02")
				case time.Time:
					if date.IsZero() {
						return ""
					}
					return date.Format("2006-01-02")
				default:
					return date
				}
			})
		}
	},

	"datetime": func(meta *Meta) {
		if meta.FormattedValuer == nil {
			meta.SetFormattedValuer(func(value interface{}, context *qor.Context) interface{} {
				switch date := meta.GetValuer()(value, context).(type) {
				case *time.Time:
					if date == nil {
						return ""
					}
					if date.IsZero() {
						return ""
					}
					return date.Format("2006-01-02 15:04")
				case time.Time:
					if date.IsZero() {
						return ""
					}
					return date.Format("2006-01-02 15:04")
				default:
					return date
				}
			})
		}
	},

	"string": func(meta *Meta) {
		if meta.FormattedValuer == nil {
			meta.SetFormattedValuer(func(value interface{}, context *qor.Context) interface{} {
				switch str := meta.GetValuer()(value, context).(type) {
				case *string:
					if str != nil {
						return *str
					}
					return ""
				case string:
					return str
				default:
					return str
				}
			})
		}
	},

	"text": func(meta *Meta) {
		if meta.FormattedValuer == nil {
			meta.SetFormattedValuer(func(value interface{}, context *qor.Context) interface{} {
				switch str := meta.GetValuer()(value, context).(type) {
				case *string:
					if str != nil {
						return *str
					}
					return ""
				case string:
					return str
				default:
					return str
				}
			})
		}
	},

	"select_one": func(meta *Meta) {
		if meta.Config == nil {
			meta.Config = &SelectOneConfig{Collection: meta.Collection}
		}
	},

	"select_many": func(meta *Meta) {
		if meta.Config == nil {
			meta.Config = &SelectManyConfig{Collection: meta.Collection}
		}
	},

	"rich_editor": func(meta *Meta) {
		if meta.Config == nil {
			meta.Config = &RichEditorConfig{}
		}
	},
}
