package controllers

import (
	"html/template"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/mmanjoura/adsa-cms/qor-example/app/models"
	"github.com/mmanjoura/adsa-cms/qor-example/config"
	"github.com/mmanjoura/adsa-cms/qor-example/config/admin"
	"github.com/mmanjoura/adsa-cms/seo"
)

func ProductShow(ctx *gin.Context) {
	var (
		product        models.Product
		colorVariation models.ColorVariation
		seoSetting     models.SEOSetting
		codes          = strings.Split(ctx.Param("code"), "_")
		productCode    = codes[0]
		colorCode      string
	)

	if len(codes) > 1 {
		colorCode = codes[1]
	}

	DB(ctx).Where(&models.Product{Code: productCode}).First(&product)
	DB(ctx).Preload("Images").Preload("Product").Preload("Color").Preload("SizeVariations.Size").Where(&models.ColorVariation{ProductID: product.ID, ColorCode: colorCode}).First(&colorVariation)
	DB(ctx).First(&seoSetting)

	config.View.Funcs(funcsMap(ctx)).Execute(
		"product_show",
		gin.H{
			"ActionBarTag":   admin.ActionBar.Render(ctx.Writer, ctx.Request),
			"Product":        product,
			"ColorVariation": colorVariation,
			"SeoTag":         seoSetting.ProductPage.Render(seoSetting, product),
			"MicroProduct": seo.MicroProduct{
				Name:        product.Name,
				Description: product.Description,
				BrandName:   product.Category.Name,
				SKU:         product.Code,
				Price:       float64(product.Price),
				Image:       colorVariation.MainImageUrl(),
			}.Render(),
			"CurrentUser":   CurrentUser(ctx),
			"CurrentLocale": CurrentLocale(ctx),
		},
		ctx.Request,
		ctx.Writer,
	)
}

func funcsMap(ctx *gin.Context) template.FuncMap {
	funcMaps := map[string]interface{}{
		"related_products": func(cv models.ColorVariation) []models.Product {
			var products []models.Product
			DB(ctx).Preload("ColorVariations").Preload("ColorVariations.Images").Limit(4).Find(&products, "id <> ?", cv.ProductID)
			return products
		},
		"other_also_bought": func(cv models.ColorVariation) []models.Product {
			var products []models.Product
			DB(ctx).Preload("ColorVariations").Preload("ColorVariations.Images").Order("id ASC").Limit(8).Find(&products, "id <> ?", cv.ProductID)
			return products
		},
	}
	for key, value := range I18nFuncMap(ctx) {
		funcMaps[key] = value
	}
	return funcMaps
}
