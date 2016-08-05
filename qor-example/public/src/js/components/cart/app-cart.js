import React from 'react';
import AppCartItem from './app-cart-item'
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
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
            <AppCartItem
                subtotal={subtotal}
                key={i}
                item={item}/>
        )
    } );



        return (        

        <div className="container">
          <h2 className="text-uppercase">Shopping Cart</h2>
          <div className="card card--padding">
            <table className="table shopping-cart-table text-center">
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Product Name</th>
                  <th>&nbsp;</th>
                  <th>Unit Price </th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
               {items}
              </tbody>
            </table>
            <div className="hr" />
            <div className="divider divider--xs" />
            <div className="row shopping-cart-btns">
              <div className="col-sm-4 col-md-4"><a href="#" className="btn btn--wd pull-left">Continue Shopping</a></div>
              <div className="divider divider--xs visible-xs" />
              <div className="col-sm-8 col-md-8"><a href="#" className="btn btn--wd btn--light pull-right">Clear Shopping Cart</a>
                <div className="divider divider--xs visible-xs" />
                <a href="#" className="btn btn--wd pull-right">Update Shopping Cart</a></div>
            </div>
            <div className="divider divider--xxs" />
          </div>
          <div className="divider divider--xs" />
    
          <div className="divider divider--md" />
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <h3>CART TOTALS</h3>
            </div>
            <div className="col-sm-6 col-md-4">
              <table className="table table-total">
                <tbody>
                  <tr>
                    <th className="text-left"> Subtotal </th>
                    <th className="text-right"> ${total.toFixed(2)}</th>
                  </tr>
                  <tr>
                    <td className="text-left"><h2>Grand Total</h2></td>
                    <td className="text-right"><h2>${total.toFixed(2)}</h2></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-center">
              <div className="col-sm-12 col-md-5"> <a href="#" className="btn btn--wd btn--xl">Proceed to checkout</a>
                <div className="divider divider--xs" />
                <p>Checkout with Multiple Addresses</p>
              </div>
            </div>
          </div>
        </div>

    );
};

export default StoreWatchMixin( Cart, cartItems )