import React from 'react';
import ShoppingCartSetting from './shopping-cart-setting'
import ShoppingCartText from './shopping-cart-text'
import ShoppingCartList from './shopping-cart-list'
import ShoppingCardBottom from './shopping-cart-bottom'
import DropDownPullRight from './dropdown-pull-right'
import HeaderTotalPrice from './header-total-price'
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';
import AppStore from  '../../../stores/app-store';

const CartSummary = ( props ) => {
		    return (
      		<div className="header__dropdowns-container">
                <div className="header__dropdowns">
                  <div className="header__search pull-left"> 
                    <a href="#" className="btn dropdown-toggle btn--links--dropdown header__dropdowns__button search-open">
                      <span className="icon icon-search" />
                    </a> 
                  </div>
                  <div className="header__cart pull-left">
                  <HeaderTotalPrice />
                    <div className="dropdown pull-right">
                      <a href="#" className="btn dropdown-toggle btn--links--dropdown header__cart__button header__dropdowns__button" data-toggle="dropdown">
                        <span className="icon icon-bag-alt" />
                        <span className="badge badge--menu">{props.qty}</span>
                      </a>
                      <div className="dropdown-menu animated fadeIn shopping-cart" role="menu">
                        <ShoppingCartSetting />
                        <ShoppingCartText />
                        <ShoppingCartList />
                  	  <ShoppingCardBottom />
                      </div>
                    </div>
                  </div>        
                  <DropDownPullRight />
                </div>
              </div>
		    );
};
export default StoreWatchMixin( CartSummary, AppStore.getCartTotals );