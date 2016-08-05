package widget_test

import (
	"fmt"
	"testing"

	"net/http"
	"strings"

	"github.com/fatih/color"
	"github.com/jinzhu/gorm"
	"github.com/mmanjoura/adsa-cms/admin"
	"github.com/mmanjoura/adsa-cms/qor"
	"github.com/mmanjoura/adsa-cms/qor/test/utils"
	"github.com/mmanjoura/adsa-cms/widget"
)

var db *gorm.DB

func init() {
	db = utils.TestDB()
}

// Runner
func TestRender(t *testing.T) {
	if err := db.DropTableIfExists(&widget.QorWidgetSetting{}).Error; err != nil {
		panic(err)
	}
	db.AutoMigrate(&widget.QorWidgetSetting{})

	Widgets := widget.New(&widget.Config{
		DB: db,
	})
	Widgets.RegisterViewPath("github.com/mmanjoura/adsa-cms/widget/test")

	Admin := admin.New(&qor.Config{DB: db})
	Admin.AddResource(Widgets)
	Admin.MountTo("/admin", http.NewServeMux())

	type bannerArgument struct {
		Title    string
		SubTitle string
	}

	Widgets.RegisterWidget(&widget.Widget{
		Name:      "Banner",
		Templates: []string{"banner"},
		Setting:   Admin.NewResource(&bannerArgument{}),
		Context: func(context *widget.Context, setting interface{}) *widget.Context {
			if setting != nil {
				argument := setting.(*bannerArgument)
				context.Options["Title"] = argument.Title
				context.Options["SubTitle"] = argument.SubTitle
			}
			return context
		},
	})

	setting := &widget.QorWidgetSetting{}
	db.Where(widget.QorWidgetSetting{Name: "HomeBanner", WidgetType: "Banner"}).FirstOrInit(setting)
	db.Create(setting)

	html := Widgets.Render("HomeBanner", "Banner")
	if !strings.Contains(string(html), "Hello, \n<h1></h1>\n<h2></h2>\n") {
		t.Errorf(color.RedString(fmt.Sprintf("\nWidget Render TestCase #%d: Failure Result:\n %s\n", 1, html)))
	}

	widgetContext := Widgets.NewContext(&widget.Context{
		Options: map[string]interface{}{"CurrentUser": "Qortex"},
	})
	html = widgetContext.Render("HomeBanner", "Banner")
	if !strings.Contains(string(html), "Hello, Qortex\n<h1></h1>\n<h2></h2>\n") {
		t.Errorf(color.RedString(fmt.Sprintf("\nWidget Render TestCase #%d: Failure Result:\n %s\n", 2, html)))
	}

	db.Where(widget.QorWidgetSetting{Name: "HomeBanner", WidgetType: "Banner"}).FirstOrInit(setting)
	setting.SetSerializableArgumentValue(&bannerArgument{Title: "Title", SubTitle: "SubTitle"})
	db.Save(setting)

	html = widgetContext.Render("HomeBanner", "Banner")
	if !strings.Contains(string(html), "Hello, Qortex\n<h1>Title</h1>\n<h2>SubTitle</h2>\n") {
		t.Errorf(color.RedString(fmt.Sprintf("\nWidget Render TestCase #%d: Failure Result:\n %s\n", 3, html)))
	}
}
