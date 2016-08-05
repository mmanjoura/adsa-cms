package csv

import (
	"encoding/csv"
	"os"
	"strconv"

	"github.com/mmanjoura/adsa-cms/exchange"
	"github.com/mmanjoura/adsa-cms/qor"
	"github.com/mmanjoura/adsa-cms/qor/resource"
)

func (c *CSV) NewReader(res *exchange.Resource, context *qor.Context) (exchange.Rows, error) {
	var rows = Rows{CSV: c, Resource: res}

	csvfile, err := os.Open(c.Filename)
	if err == nil {
		defer csvfile.Close()
		reader := csv.NewReader(csvfile)
		reader.TrimLeadingSpace = true
		rows.records, err = reader.ReadAll()
		rows.total = len(rows.records) - 1
		if res.Config.WithoutHeader {
			rows.total++
		}
	}

	return &rows, err
}

type Rows struct {
	*CSV
	Resource *exchange.Resource
	current  int
	total    int
}

func (rows Rows) Header() (results []string) {
	if rows.total > 0 {
		if rows.Resource.Config.WithoutHeader {
			for i := 0; i <= len(rows.records[0]); i++ {
				results = append(results, strconv.Itoa(i))
			}
		} else {
			return rows.records[0]
		}
	}
	return
}

func (rows *Rows) Total() uint {
	return uint(rows.total)
}

func (rows *Rows) Next() bool {
	if rows.total >= rows.current+1 {
		rows.current += 1
		return true
	}
	return false
}

func (rows Rows) ReadRow() (*resource.MetaValues, error) {
	var metaValues resource.MetaValues
	columns := rows.Header()

	for index, column := range columns {
		metaValue := resource.MetaValue{
			Name:  column,
			Value: rows.records[rows.current][index],
		}
		if meta := rows.Resource.GetMeta(column); meta != nil {
			metaValue.Meta = meta
		}
		metaValues.Values = append(metaValues.Values, &metaValue)
	}

	return &metaValues, nil
}
