# Widget

Define some customizable, shareable HTML widgets for different pages

## Getting Started

```go
// Initialize widgets container
Widgets := widget.New(&widget.Config{DB: db})

// Define widget's setting struct
type bannerArgument struct {
  Title           string
  Link            string
  BackgroundImage media_library.FileSystem
}

// Register new widget
Widgets.RegisterWidget(&widget.Widget{
  // Widget's Name
  Name:     "Banner",
  // Widget's available templates
  Templates: []string{"banner1", "banner2"},
  // Widget's setting, which is configurable from the place using the widget with inline edit
  Setting:  Admin.NewResource(&bannerArgument{}),
  // Generate a context to render the widget based on the widget's configurations
  Context: func(context *widget.Context, setting interface{}) *widget.Context {
    context.Options["Setting"] = setting
    context.Options["CurrentTime"] = time.Now()
    return context
  },
})

// Manage widgets from QOR Admin interface
Admin.AddResource(Widgets)
```

### Render Widget From Controller

```go
func Index(request *http.Request, writer http.ResponseWriter) {
  // Generate widget context, widget will generate a new context based on it, and use the generated one to render template
  widgetContext := widget.NewContext(map[string]interface{}{"Request": request, "CurrentUser": currentUser})

  // Render Widget `HomeBanner` based on widget `Banner`'s definition to HTML template
  bannerContent := Widgets.Render("Banner", "HomeBanner", widgetContext)

  // Render Widget `CampaignBanner` based on widget `Banner`'s definition with inline edit enabled to HTML template
  bannerContent := Widgets.Render("Banner", "CampaignBanner", widgetContext, true)

  // Then you could use the banner's HTML content in your templates
}
```

### Templates

Widget's template is Golang HTML template based, so supposed to be as flexible as it.

Above widget configured to use templates `banner1`, `banner2`, QOR widget will look up templates from path `$APP_ROOT/app/views/widgets` by default, so you need to put your template to the right place.

When render with the found template, QOR widget will use the widget's generated context and use it to render the template like how Golang template works.

```go
// app/views/widgets/banner1.tmpl
<div class="banner" style="background:url('{{.Setting.BackgroundImage}}') no-repeat center center">
  <div class="container">
    <div class="row">
      <div class="column column-12">
        <a href="{{.Setting.Link}}" class="button button__primary">{{.Setting.Title}}</a>
        {{.CurrentTime}}
      </div>
    </div>
  </div>
</div>

// app/views/widgets/banner2.tmpl
<div class="banner">
  <div class="column column-9">
    <img src="{{.Setting.BackgroundImage}}" class="banner__logo" />
  </div>

  <div class="column column-3" style="margin-top: 2em;">
    <div><a href="{{.Setting.Link}}" class="button button__primary">{{.Setting.Title}}</a></div>
  </div>
</div>
```

You could also register other paths like:

```go
Widgets.RegisterViewPath("app/views/widgets")
```

### Register Scopes

In some cases, you might want to show a different page according to UTM source/medium/campaign or for A/B testing to increase the conversion rate.  then Widget's Scope is for you, you could register some scopes, and configure your widget for each of them, when a scope's `Visible` condition matched, then widget will use its configuration to render the widget.

```go
Widgets.RegisterScope(&widget.Scope{
	Name: "From Google",
	Visible: func(context *widget.Context) bool {
		if request, ok := context.Get("Request"); ok {
			return strings.Contains(request.(*http.Request).Referer(), "google.com")
		}
		return false
	},
})

Widgets.RegisterScope(&widget.Scope{
	Name: "VIP User",
	Visible: func(context *widget.Context) bool {
		if user, ok := context.Get("CurrentUser"); ok {
			return user.(*User).Role == "vip"
		}
		return false
	},
})
```

## Live Widget Demo

[Widget Demo](http://demo.getqor.com)

## License

Released under the [MIT License](http://opensource.org/licenses/MIT).

```go
Widgets.RegisterWidget(&widget.Widget{
  // Widget's Name
  Name:     "Banner",
  // Widget's available templates
  Templates: []string{"banner1", "banner2"},
  // Widget's setting, which is configurable from the place using the widget with inline edit
  Setting:  Admin.NewResource(&bannerArgument{}),
  // Generate a context to render the widget based on the widget's configurations
  Context: func(context *widget.Context, setting interface{}) *widget.Context {
    context.Options["Setting"] = setting
    context.Options["CurrentTime"] = time.Now()
    return context
  },
})

Widgets.RegisterWidgetGroup(&widget.WidgetGroup{
  Name: "Banner",
  Widgets: []*widget.Widget{widget1, widget2},
})

render_widget "home_banner", "Banner"
```
