import React from 'react';
import CartButton from '../../cart/app-cart-button';
import AppActions from '../../../actions/app-actions'

export default ( props ) => {
		    return (
		    	
		      <li className="shopping-cart__item">
		        <div className="shopping-cart__item__image pull-left">
		        	<a href="#">
		        		<img src="images/swimwear/products/product-1.jpg" alt />
		        	</a>
		        </div>
		        <div className="shopping-cart__item__info">
		          <div className="shopping-cart__item__info__title">
		            <h2 className="text-uppercase"><a href="#"> {props.item.title} </a></h2>
		          </div>
		          <div className="shopping-cart__item__info__option">Color: {props.item.color}</div>
		          <div className="shopping-cart__item__info__option">Size: {props.item.size}</div>
		          <div className="shopping-cart__item__info__price">${props.item.cost} </div>
		          <div className="shopping-cart__item__info__qty">Qty:{props.item.qty}</div>
		          <div className="shopping-cart__item__info__delete">
		          	<a href="#"  onClick={AppActions.removeItem.bind(null, props.item )}>
          			<span> X </span>
          			</a> 
		          </div>
		        </div>
		      </li>
		    );
};
