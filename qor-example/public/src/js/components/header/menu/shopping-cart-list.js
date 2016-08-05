import React from 'react';
import AppStore from '../../../stores/app-store';
import ShoppingCardItem from './shopping-cart-item'
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';
import { Link } from 'react-router';



const cartItems = () => {
    return {'items': AppStore.getCart()}
};

const Cart = ( props ) => {
    var total = 0;
    var items = props.items.map( ( item, i ) => {
        let subtotal = item.cost * item.qty;
        total += subtotal;
        return (
            <ShoppingCardItem
                subtotal={subtotal}
                key={i}
                item={item}/>
        )
    } );


    return (
       <ul>
        {items}
       </ul>
    );
};

export default StoreWatchMixin( Cart, cartItems )