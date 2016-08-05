import React from 'react';
import AppStore from  '../../../stores/app-store';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';

const CartSummary = (props) => {
	    return (
	      <div className="shopping-cart__top text-uppercase">Your Cart({props.qty})</div>
	    );
};

export default StoreWatchMixin( CartSummary, AppStore.getCartTotals );


