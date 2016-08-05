# L10n

L10n gives your [GORM-backend](https://github.com/jinzhu/gorm) models the ability to localize for different locales. It can be a catalyst for the adaptation of a product, application, or document content to meet the language, cultural, and other requirements of a specific target market.

[![GoDoc](https://godoc.org/github.com/mmanjoura/adsa-cms/l10n?status.svg)](https://godoc.org/github.com/mmanjoura/adsa-cms/l10n)

## Usage

L10n is using [GORM](https://github.com/jinzhu/gorm) callbacks to handle localization, so you will need to register callbacks first:

```go
import (
  "github.com/jinzhu/gorm"
  "github.com/mmanjoura/adsa-cms/l10n"
)

func main() {
  db, err := gorm.Open("sqlite3", "demo_db")
  l10n.RegisterCallbacks(&db)
}
```

### Make Model Localizable

Embed `l10n.Locale` into your model as an anonymous field to enable localization, for example:

```go
type Product struct {
  gorm.Model
  Name string
  Code string
  l10n.Locale
}
```

`l10n.Locale` will add a `language_code` column as composite primary key with existing primary keys, using GORM's AutoMigrate to create the field.

The `language_code` column will be used to save localized model's locale. If no locale is set, then the global locale default will be used.

The default locale is `en-US`, override the default by setting `l10n.Global`, for example:

```go
l10n.Global = 'zh-CN'
```

### Create localized resources

```go
// Create global product
product := Product{Name: "Global product", Description: "Global product description"}
DB.Create(&product)
product.LanguageCode   // "en-US"

// Create zh-CN product
product.Name = "中文产品"
DB.Set("l10n:locale", "zh-CN").Create(&product)

// Query zh-CN product with primary key 111
DB.Set("l10n:locale", "zh-CN").First(&productCN, 111)
productCN.Name         // "中文产品"
productCN.LanguageCode // "zh"
```

### Keep localized resources's fields syncing

Add tag `l10n:"sync"` to the fields that you wish to always sync with the *global* record:

```go
type Product struct {
  gorm.Model
  Name  string
  Code  string `l10n:"sync"`
  l10n.Locale
}
```

Now the localized product's `Code` will be the same as the global product's `Code`. The `Code` is not changable from localized resources, and when the global record change its `Code`, localized records' `Code` will be synced automatically.

### Query Modes

L10n provides 5 modes for Query

* global   - find global records
* locale   - find localized records
* reverse  - find global records that haven't been localized
* unscoped - raw query, won't auto add `locale` conditions when query
* default  - find localized record, if not found, return the global one

You can specify the mode by:

```go
dbCN := db.Set("l10n:locale", "zh-CN")

mode := "global"
dbCN.Set("l10n:mode", mode).First(&product, 111)
// SELECT * FROM products WHERE id = 111 AND language_code = 'en-US';

mode := "locale"
db.Set("l10n:mode", mode).First(&product, 111)
// SELECT * FROM products WHERE id = 111 AND language_code = 'zh-CN';
```

## Qor Support

[QOR](http://getqor.com) is architected from the ground up to accelerate development and deployment of Content Management Systems, E-commerce Systems, and Business Applications and as such is comprised of modules that abstract common features for such systems.

Although L10n could be used alone, it works very nicely with QOR - if you have requirements to manage your application's data, be sure to check QOR out!

[QOR Demo:  http://demo.getqor.com/admin](http://demo.getqor.com/admin)

[L10n Demo with QOR](http://demo.getqor.com/admin/products)

By default, Qor will only allow you manage the global language. If you have configured `Auth`, QOR Admin will try to get allowed locales from the current user.

* Viewable Locales - locales for which the current user has read permission

```go
func (user User) ViewableLocales() []string {
  return []string{l10n.Global, "zh-CN", "JP", "EN", "DE"}
}
```

* Editable Locales - locales for which the current user has manage (create/update/delete) permission

```go
func (user User) EditableLocales() []string {
  if user.role == "global_admin" {
    return []string{l10n.Global, "zh-CN", "EN"}
  } else {
    return []string{"zh-CN", "EN"}
  }
}
```

## License

Released under the [MIT License](http://opensource.org/licenses/MIT).
