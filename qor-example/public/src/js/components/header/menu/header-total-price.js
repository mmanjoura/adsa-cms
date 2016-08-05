import React from 'react';
import AppStore from  '../../../stores/app-store';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';

const CartSummary = ( props ) => {
 			   return (
		      <span className="header__cart__indicator hidden-xs">${props.total.toFixed(2)}</span>
		    );
};

export default StoreWatchMixin( CartSummary, AppStore.getCartTotals );