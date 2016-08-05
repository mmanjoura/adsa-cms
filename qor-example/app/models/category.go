package models

import (
	"strings"

	"github.com/jinzhu/gorm"
	"github.com/mmanjoura/adsa-cms/l10n"
	"github.com/mmanjoura/adsa-cms/publish"
	"github.com/mmanjoura/adsa-cms/sorting"
	"github.com/mmanjoura/adsa-cms/validations"
)

type Category struct {
	gorm.Model
	l10n.Locale
	publish.Status
	sorting.Sorting
	Name string
}

func (category Category) Validate(db *gorm.DB) {
	if strings.TrimSpace(category.Name) == "" {
		db.AddError(validations.NewError(category, "Name", "Name can not be empty"))
	}
}
