package models

import (
	"strings"

	"github.com/jinzhu/gorm"
	"github.com/mmanjoura/adsa-cms/l10n"
	"github.com/mmanjoura/adsa-cms/publish"
	"github.com/mmanjoura/adsa-cms/sorting"
	"github.com/mmanjoura/adsa-cms/validations"
)

type Color struct {
	gorm.Model
	l10n.Locale
	publish.Status
	sorting.Sorting
	Name string
	Code string `l10n:"sync"`
}

func (color Color) Validate(db *gorm.DB) {
	if strings.TrimSpace(color.Name) == "" {
		db.AddError(validations.NewError(color, "Name", "Name can not be empty"))
	}

	if strings.TrimSpace(color.Code) == "" {
		db.AddError(validations.NewError(color, "Code", "Code can not be empty"))
	}
}
