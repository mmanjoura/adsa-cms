package migrations

import (
	"github.com/mmanjoura/adsa-cms/activity"
	"github.com/mmanjoura/adsa-cms/media_library"
	"github.com/mmanjoura/adsa-cms/publish"
	"github.com/mmanjoura/adsa-cms/qor-example/app/models"
	"github.com/mmanjoura/adsa-cms/qor-example/config/admin"
	"github.com/mmanjoura/adsa-cms/qor-example/db"
	"github.com/mmanjoura/adsa-cms/transition"
)

func init() {
	AutoMigrate(&media_library.AssetManager{})

	AutoMigrate(&models.Product{}, &models.ColorVariation{}, &models.ColorVariationImage{}, &models.SizeVariation{})
	AutoMigrate(&models.Color{}, &models.Size{}, &models.Category{}, &models.Collection{})

	AutoMigrate(&models.Address{})

	AutoMigrate(&models.Order{}, &models.OrderItem{})

	AutoMigrate(&models.Store{})

	AutoMigrate(&models.Setting{})

	AutoMigrate(&models.User{})

	AutoMigrate(&models.SEOSetting{})

	AutoMigrate(&transition.StateChangeLog{})

	AutoMigrate(&activity.QorActivity{})

	AutoMigrate(&admin.QorWidgetSetting{})
}

func AutoMigrate(values ...interface{}) {
	for _, value := range values {
		db.DB.AutoMigrate(value)

		if publish.IsPublishableModel(value) {
			db.Publish.AutoMigrate(value)
		}
	}
}
