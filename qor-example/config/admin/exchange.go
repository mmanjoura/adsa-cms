package admin

import (
	"github.com/mmanjoura/adsa-cms/exchange"
	"github.com/mmanjoura/adsa-cms/qor"
	"github.com/mmanjoura/adsa-cms/qor-example/app/models"
	"github.com/mmanjoura/adsa-cms/qor/resource"
	"github.com/mmanjoura/adsa-cms/qor/utils"
	"github.com/mmanjoura/adsa-cms/validations"
)

var ProductExchange *exchange.Resource

func init() {
	ProductExchange = exchange.NewResource(&models.Product{}, exchange.Config{PrimaryField: "Code"})
	ProductExchange.Meta(&exchange.Meta{Name: "Code"})
	ProductExchange.Meta(&exchange.Meta{Name: "Name"})
	ProductExchange.Meta(&exchange.Meta{Name: "Price"})

	ProductExchange.AddValidator(func(record interface{}, metaValues *resource.MetaValues, context *qor.Context) error {
		if utils.ToInt(metaValues.Get("Price").Value) < 100 {
			return validations.NewError(record, "Price", "price can't less than 100")
		}
		return nil
	})
}
