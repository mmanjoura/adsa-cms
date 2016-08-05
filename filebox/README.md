# Filebox

Filebox could be used to provide access permission control for files, directories

You could choose filebox to satisfy below scenarios:

Scenario 1:

* You would like to make file `~/documents/files/users.csv` able to be download via link `http://127.0.0.1/downloads/users.csv`
* Only Admin user able to download this file

Scenario 2:

* You create a folder at `~/exchanges`
* Only Admin user could access files in this folder

[![GoDoc](https://godoc.org/github.com/mmanjoura/adsa-cms/filebox?status.svg)](https://godoc.org/github.com/mmanjoura/adsa-cms/filebox)

## Usage

```go
import (
	"github.com/mmanjoura/adsa-cms/filebox"
	"github.com/mmanjoura/adsa-cms/roles"
	"net/http"
	"string"
)

func main() {
	mux := http.NewServeMux()

	// Mount filebox into `/downloads`
	Filebox := filebox.New("/home/qor/project/downloads")
	Filebox.MountTo("/downloads", mux)

	// Assert folder downloads has file users.csv
	// then you could download this file by http://127.0.0.1:7000/downloads/users.csv

	// Add permission for users.csv, limit to only admin user able to access
	permission := roles.Allow(roles.Read, "admin")
	userFile := Filebox.AccessFile("users.csv")
	userFile.SetPermission(permission)
	// read content from file `users.csv`
	fileContentReader, err := userFile.Read()
	// write content for file `users.csv`
	userFile.Write(fileContentReader)

	// Add permission for a specific directory
	exchangesDir := Dir.AccessDir("/exchanges")
	exchangesDir.SetPermission(permission)
	// Create a new file and it will use directory's permission if it hasn't define its own
	exchangesDir.WriteFile("products.csv", strings.NewReader("Content"))
}
```

## License

Released under the [MIT License](http://opensource.org/licenses/MIT).
