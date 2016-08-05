package admin

import (
	"encoding/json"

	"github.com/mmanjoura/adsa-cms/admin"
	"github.com/mmanjoura/adsa-cms/qor-example/app/models"
)

type Charts struct {
	Orders []models.Chart
	Users  []models.Chart
}

func ReportsDataHandler(context *admin.Context) {
	charts := &Charts{}
	startDate := context.Request.URL.Query().Get("startDate")
	endDate := context.Request.URL.Query().Get("endDate")

	charts.Orders = models.GetChartData("orders", startDate, endDate)
	charts.Users = models.GetChartData("users", startDate, endDate)

	b, _ := json.Marshal(charts)
	context.Writer.Write(b)
	return
}

func initRouter() {
	Admin.GetRouter().Get("/reports", ReportsDataHandler)
}
