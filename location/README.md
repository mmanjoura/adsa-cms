# Location

Location picks up location details from an interactive Google Map widget when creating/editing any applicable Resource in [Qor Admin](http://github.com/mmanjoura/adsa-cms/qor).

# Usage

```go
import (
	"github.com/jinzhu/gorm"
	"github.com/mmanjoura/adsa-cms/location"
)

type Store struct {
	gorm.Model
	Name string
	location.Location
}

type Shop struct {
	gorm.Model
	Name string
	location.Location `location:"name:Address"`
}
```

## [Qor Support](https://github.com/mmanjoura/adsa-cms/qor)

[QOR](http://getqor.com) is architected from the ground up to accelerate development and deployment of Content Management Systems, E-commerce Systems, and Business Applications and as such is comprised of modules that abstract common features for such systems.

To use Location with QOR Admin, simply embed `location.Location` in a model then behold the map picker in the admin interface.

[Location Demo:  http://demo.getqor.com/admin/setting](http://demo.getqor.com/admin/setting)

# License

Released under the [MIT License](https://github.com/jinzhu/gorm/blob/master/License).
