package auth

import (
	"github.com/mmanjoura/adsa-cms/admin"
	"github.com/mmanjoura/adsa-cms/qor"
	"github.com/mmanjoura/adsa-cms/qor-example/app/models"
	"github.com/mmanjoura/adsa-cms/roles"
	"net/http"
)

func init() {
	roles.Register("admin", func(req *http.Request, currentUser interface{}) bool {
		return currentUser != nil && currentUser.(*models.User).Role == "Admin"
	})
}

type AdminAuth struct {
}

func (AdminAuth) LoginURL(c *admin.Context) string {
	return "/auth/login"
}

func (AdminAuth) LogoutURL(c *admin.Context) string {
	return "/auth/logout"
}

func (AdminAuth) GetCurrentUser(c *admin.Context) qor.CurrentUser {
	userInter, err := Auth.CurrentUser(c.Writer, c.Request)
	if userInter != nil && err == nil {
		return userInter.(*models.User)
	}
	return nil
}
