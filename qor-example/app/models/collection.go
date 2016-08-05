package models

import (
	"github.com/jinzhu/gorm"
	"github.com/mmanjoura/adsa-cms/l10n"
	"github.com/mmanjoura/adsa-cms/publish"
)

type Collection struct {
	gorm.Model
	Name string
	l10n.LocaleCreatable
	publish.Status
}
