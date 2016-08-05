package models

import (
	"github.com/jinzhu/gorm"
	"github.com/mmanjoura/adsa-cms/l10n"
	"github.com/mmanjoura/adsa-cms/location"
)

type FeeSetting struct {
	ShippingFee     uint
	GiftWrappingFee uint
	CODFee          uint `gorm:"column:cod_fee"`
	TaxRate         int
}

type Setting struct {
	gorm.Model
	FeeSetting
	location.Location `location:"name:Company Address"`
	l10n.Locale
}
