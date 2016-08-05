package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/mmanjoura/adsa-cms/qor-example/app/models"
	"github.com/mmanjoura/adsa-cms/qor-example/config"
	"github.com/mmanjoura/adsa-cms/qor-example/config/admin"
	"github.com/mmanjoura/adsa-cms/qor-example/config/auth"
	"github.com/mmanjoura/adsa-cms/seo"
	"github.com/mmanjoura/adsa-cms/widget"
	"gopkg.in/authboss.v0"
)

func isEditMode(ctx *gin.Context) bool {
	return admin.ActionBar.EditMode(ctx.Writer, ctx.Request)
}

func CurrentUser(ctx *gin.Context) *models.User {
	userInter, err := auth.Auth.CurrentUser(ctx.Writer, ctx.Request)
	if userInter != nil && err == nil {
		return userInter.(*models.User)
	}
	return nil
}

func HomeIndex(ctx *gin.Context) {
	var products []models.Product
	DB(ctx).Limit(9).Preload("ColorVariations").Preload("ColorVariations.Images").Find(&products)
	seoObj := models.SEOSetting{}
	DB(ctx).First(&seoObj)

	widgetContext := admin.Widgets.NewContext(&widget.Context{
		DB:         DB(ctx),
		Options:    map[string]interface{}{"Request": ctx.Request},
		InlineEdit: isEditMode(ctx),
	})

	config.View.Funcs(I18nFuncMap(ctx)).Execute(
		"home_index",
		gin.H{
			"ActionBarTag":           admin.ActionBar.Render(ctx.Writer, ctx.Request),
			authboss.FlashSuccessKey: auth.Auth.FlashSuccess(ctx.Writer, ctx.Request),
			authboss.FlashErrorKey:   auth.Auth.FlashError(ctx.Writer, ctx.Request),
			"SeoTag":                 seoObj.HomePage.Render(seoObj, nil),
			"top_banner":             widgetContext.Render("TopBanner", "Banner"),
			"feature_products":       widgetContext.Render("FeatureProducts", "Products"),
			"Products":               products,
			"MicroSearch": seo.MicroSearch{
				URL:    "http://demo.getqor.com",
				Target: "http://demo.getqor.com/search?q={keyword}",
			}.Render(),
			"MicroContact": seo.MicroContact{
				URL:         "http://demo.getqor.com",
				Telephone:   "080-0012-3232",
				ContactType: "Customer Service",
			}.Render(),
			"CurrentUser":   CurrentUser(ctx),
			"CurrentLocale": CurrentLocale(ctx),
		},
		ctx.Request,
		ctx.Writer,
	)
}
