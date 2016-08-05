package i18n

import (
	"path/filepath"

	"github.com/mmanjoura/adsa-cms/i18n"
	"github.com/mmanjoura/adsa-cms/i18n/backends/database"
	"github.com/mmanjoura/adsa-cms/i18n/backends/yaml"
	"github.com/mmanjoura/adsa-cms/qor-example/config"
	"github.com/mmanjoura/adsa-cms/qor-example/db"
)

var I18n *i18n.I18n

func init() {
	I18n = i18n.New(database.New(db.DB), yaml.New(filepath.Join(config.Root, "config/locales")))
}
