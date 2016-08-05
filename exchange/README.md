# Exchange

Exchange is a Golang library that allows a database to be exported or imported to or from a file.

Data can optionally be validated during import and export.

Data can optionally be processed during import.

[![GoDoc](https://godoc.org/github.com/mmanjoura/adsa-cms/exchange?status.svg)](https://godoc.org/github.com/mmanjoura/adsa-cms/exchange)

## Usage

```go
import (
  "github.com/mmanjoura/adsa-cms/exchange"
  "github.com/mmanjoura/adsa-cms/exchange/backends/csv"
)

func main() {
  // Define Resource
  product = exchange.NewResource(&Product{}, exchange.Config{PrimaryField: "Code"})
  // Define columns are exportable/importable
  product.Meta(&exchange.Meta{Name: "Code"})
  product.Meta(&exchange.Meta{Name: "Name"})
  product.Meta(&exchange.Meta{Name: "Price"})

  // Define context environment
  context := &qor.Context{DB: db}

  // Import products.csv into database
  product.Import(csv.New("products.csv"), context)

  // Export products into products.csv
  product.Export(csv.New("products.csv"), context)
}
```

Sample products.csv

```csv
Code, Name, Price
P001, Product P001, 100
P002, Product P002, 200
P003, Product P003, 300
```

## Advanced Usages

* Add Validations

```go
product.AddValidator(func(result interface{}, metaValues *resource.MetaValues, context *qor.Context) error {
  if f, err := strconv.ParseFloat(fmt.Sprint(metaValues.Get("Price").Value), 64); err == nil {
    if f == 0 {
      return errors.New("product's price can't be 0")
    }
    return nil
  } else {
    return err
  }
})
```

* Process data before import

```go
product.AddProcessor(func(result interface{}, metaValues *resource.MetaValues, context *qor.Context) error {
  product := result.(*Product)
  product.Price = product.Price * 1.1 // Add 10% Tax
  return nil
})
```

* Callbacks

```go
// Importing callbacks
product.Import(csv.New("products.csv"), context, func(progress exchange.Progress) error {
    fmt.Printf("%v/%v Importing product %v\n", progress.Current, progress.Total, progress.Value.(*Product).Code))
})

// Exporting callbacks
product.Export(csv.New("products.csv"), context, func(progress exchange.Progress) error {
    fmt.Printf("%v/%v Exporting product %v\n", progress.Current, progress.Total, progress.Value.(*Product).Code))
})
```

## License

Released under the [MIT License](http://opensource.org/licenses/MIT).
