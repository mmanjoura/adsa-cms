package models

import (
	"github.com/jinzhu/gorm"
	"github.com/mmanjoura/adsa-cms/location"
	"github.com/mmanjoura/adsa-cms/sorting"
)

type Store struct {
	gorm.Model
	Name  string
	Phone string
	Email string
	location.Location
	sorting.Sorting
}
