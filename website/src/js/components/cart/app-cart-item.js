import React from 'react';
import CartButton from './app-cart-button';
import AppActions from '../../actions/app-actions'

export default (props) => {
        return (   

              

  <tr>
        <td>
          <div className="th-title visible-xs">Remove From Cart:</div>
          <a className="icon-clear shopping-cart-table__delete" href="#/appcart" onClick={AppActions.removeItem.bind(null, props.item )} /></td>
          <td className="no-title"><div className="shopping-cart-table__product-image">
          <a href="product.html"><img src="images/swimwear/products/product-1.jpg" alt /></a>
          </div>
        </td>
        <td>
          <div className="th-title visible-xs">Product Name:</div>
          <h6 className="shopping-cart-table__product-name text-left text-uppercase">
          <a href="product.html">{props.item.title} </a></h6>
          <div className="shopping-cart-table__product-color text-left">
            <ul className="options-swatch options-swatch--color">
              <li><a href="#"><span className="swatch-label">
                  <img src="images/colors/red.png" width={10} height={10} alt /></span></a>
              </li>
            </ul>
          </div>
        </td>
        <td>
          <div className="th-title visible-xs">Unit Price:</div>
          <div className="shopping-cart-table__product-price">${props.item.cost} </div></td>
        <td>
          <div className="th-title visible-xs">QTY:</div>
          <div className="input-group-qty"> <span className="pull-left"> </span>
            <input type="text" name="quant[1]" className="input-number input--wd input-qty pull-left" defaultValue={props.item.qty} min={1} max={100}  />
            <span className="pull-left btn-number-container">
              <button type="button" className="btn btn-number btn-number--plus" data-type="plus"> + </button>
              <button type="button" className="btn btn-number btn-number--minus" disabled="disabled" data-type="minus"> – </button>
            </span> </div>
          <a className="icon-pencil shopping-cart-table__delete" href="#" /></td>
        <td>
          <div className="th-title visible-xs">Subtotal:</div>
          <div className="shopping-cart-table__product-price">${props.subtotal.toFixed(2)}</div></td>
      </tr>   

    );
            
};