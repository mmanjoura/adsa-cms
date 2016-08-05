package widget

import (
	"bytes"
	"errors"
	"fmt"
	"html/template"
	"os"
	"path"
	"path/filepath"
	"strings"

	"github.com/mmanjoura/adsa-cms/qor/utils"
)

// Render find widget by name, render it based on current context
func (widgets *Widgets) Render(widgetName string, widgetGroupName string) template.HTML {
	return widgets.NewContext(nil).Render(widgetName, widgetGroupName)
}

func (widgets *Widgets) NewContext(context *Context) *Context {
	if context == nil {
		context = &Context{}
	}

	if context.DB == nil {
		context.DB = widgets.Config.DB
	}

	if context.Options == nil {
		context.Options = map[string]interface{}{}
	}

	context.Widgets = widgets
	return context
}

// FuncMap return view functions map
func (widgets *Widgets) FuncMap(enableInlineEdit bool) template.FuncMap {
	funcMap := template.FuncMap{}

	funcMap["render_widget"] = func(widgetName, widgetKey string, context *Context) template.HTML {
		return widgets.Render(widgetName, widgetKey)
	}

	return funcMap
}

// Render register widget itself content
func (w *Widget) Render(context *Context, file string) template.HTML {
	var err error
	var result = bytes.NewBufferString("")
	if file == "" {
		file = w.Templates[0]
	}

	defer func() {
		if r := recover(); r != nil {
			err = fmt.Errorf("Get error when render file %v: %v", file, r)
			utils.ExitWithMsg(err)
		}
	}()

	if file, err = w.findTemplate(file + ".tmpl"); err == nil {
		if tmpl, err := template.New(filepath.Base(file)).ParseFiles(file); err == nil {
			if err = tmpl.Execute(result, context.Options); err == nil {
				return template.HTML(result.String())
			}
		}
	}

	return template.HTML(err.Error())
}

// RegisterViewPath register views directory
func (widgets *Widgets) RegisterViewPath(p string) {
	for _, gopath := range strings.Split(os.Getenv("GOPATH"), ":") {
		if registerViewPath(path.Join(gopath, "src", p)) == nil {
			return
		}
	}
}

func isExistingDir(pth string) bool {
	fi, err := os.Stat(pth)
	if err != nil {
		return false
	}
	return fi.Mode().IsDir()
}

func registerViewPath(path string) error {
	if isExistingDir(path) {
		var found bool

		for _, viewPath := range viewPaths {
			if path == viewPath {
				found = true
				break
			}
		}

		if !found {
			viewPaths = append(viewPaths, path)
		}
		return nil
	}
	return errors.New("path not found")
}

func (w *Widget) findTemplate(layouts ...string) (string, error) {
	for _, layout := range layouts {
		for _, p := range viewPaths {
			if _, err := os.Stat(filepath.Join(p, layout)); !os.IsNotExist(err) {
				return filepath.Join(p, layout), nil
			}
		}
	}
	return "", fmt.Errorf("template not found: %v", layouts)
}
