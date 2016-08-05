package models

import (
	"github.com/jinzhu/gorm"
	"github.com/mmanjoura/adsa-cms/l10n"
	"github.com/mmanjoura/adsa-cms/seo"
)

type SEOSetting struct {
	gorm.Model
	l10n.Locale
	SiteName    string
	DefaultPage seo.Setting
	HomePage    seo.Setting
	ProductPage seo.Setting `seo:"Name,Code"`
}
