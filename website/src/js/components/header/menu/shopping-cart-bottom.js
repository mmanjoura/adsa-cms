import React from 'react';
import AppStore from  '../../../stores/app-store';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';

const CartSummary = ( props ) => {
    return (

       <div className="shopping-cart__bottom">
            <div className="pull-left">
            	Subtotal: <span className="shopping-cart__total"> ${props.total.toFixed(2)}</span>
            </div>
            <div className="pull-right">
              <button className="btn btn--wd text-uppercase">Checkout</button>
            </div>
          </div>
    );
};

export default StoreWatchMixin( CartSummary, AppStore.getCartTotals );