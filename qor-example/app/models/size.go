package models

import (
	"strings"

	"github.com/jinzhu/gorm"
	"github.com/mmanjoura/adsa-cms/l10n"
	"github.com/mmanjoura/adsa-cms/publish"
	"github.com/mmanjoura/adsa-cms/sorting"
	"github.com/mmanjoura/adsa-cms/validations"
)

type Size struct {
	gorm.Model
	l10n.Locale
	publish.Status
	sorting.Sorting
	Name string
	Code string `l10n:"sync"`
}

func (size Size) Validate(db *gorm.DB) {
	if strings.TrimSpace(size.Name) == "" {
		db.AddError(validations.NewError(size, "Name", "Name can not be empty"))
	}

	if strings.TrimSpace(size.Code) == "" {
		db.AddError(validations.NewError(size, "Code", "Code can not be empty"))
	}
}
