package csv

import (
	"encoding/csv"
	"fmt"
	"os"
	"path/filepath"

	"github.com/mmanjoura/adsa-cms/exchange"
	"github.com/mmanjoura/adsa-cms/qor"
	"github.com/mmanjoura/adsa-cms/qor/resource"
	"github.com/mmanjoura/adsa-cms/roles"
)

func (c *CSV) NewWriter(res *exchange.Resource, context *qor.Context) (exchange.Writer, error) {
	writer := &Writer{CSV: c, Resource: res, context: context}

	var metas []resource.Metaor
	for _, meta := range res.GetMetas([]string{}) {
		if meta.HasPermission(roles.Read, context) {
			metas = append(metas, meta)
		}
	}
	writer.metas = metas

	dir := filepath.Dir(c.Filename)
	if _, err := os.Stat(dir); os.IsNotExist(err) {
		err = os.MkdirAll(dir, os.ModePerm)
	}
	csvfile, err := os.OpenFile(c.Filename, os.O_RDWR|os.O_CREATE|os.O_TRUNC, 0666)

	if err == nil {
		writer.Writer = csv.NewWriter(csvfile)
	}

	return writer, err
}

type Writer struct {
	*CSV
	context  *qor.Context
	Resource *exchange.Resource
	Writer   *csv.Writer
	metas    []resource.Metaor
}

func (writer *Writer) WriteHeader() error {
	if !writer.Resource.Config.WithoutHeader {
		var results []string
		for _, meta := range writer.metas {
			results = append(results, meta.GetName())
		}
		writer.Writer.Write(results)
	}
	return nil
}

func (writer *Writer) WriteRow(record interface{}) (*resource.MetaValues, error) {
	var metaValues resource.MetaValues
	var results []string

	for _, meta := range writer.metas {
		value := meta.GetFormattedValuer()(record, writer.context)
		metaValue := resource.MetaValue{
			Name:  meta.GetName(),
			Value: value,
		}

		metaValues.Values = append(metaValues.Values, &metaValue)
		results = append(results, fmt.Sprint(value))
	}

	return &metaValues, writer.Writer.Write(results)
}

func (writer *Writer) Flush() {
	writer.Writer.Flush()
}
