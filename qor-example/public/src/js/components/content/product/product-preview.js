import React from 'react';
import { Link } from 'react-router';
import AppActions from '../../../actions/app-actions'


export default ( props ) => {
    let itemStyle = {
        borderBottom: '1px solid #ccc',
        paddingBottom: 15
    };
    return (


    <div className="slick-slide slick-active" data-slick-index={0} aria-hidden="false" style={{width: 293}}>

      <div className="product-preview-wrapper" style={{width: '100%', display: 'inline-block'}}>
      <div className="product-preview">
        <div className="product-preview__image">
        	<Link to="/product" >
        		<img src={props.item.image} data-lazy="images/swimwear/products/product-4.jpg" alt />
        	</Link>
        </div>
         {/* <div className="product-preview__outstock">OUT STOCK</div> */}
        <div className="product-preview__label product-preview__label--left product-preview__label--new">
        	<span>new</span>
        </div>
        <div className="product-preview__label product-preview__label--right product-preview__label--sale">
        	<span><br />sale<br />-10%</span>
        </div>
        <div className="product-preview__info text-center">
          <div className="product-preview__info__btns">
          	<a href="#" className="btn btn--round ajax-to-cart" onClick={AppActions.addItem.bind(null, props.item )}>
          		<span className="icon-ecommerce"  />
          	</a> 
          	<a href="quick-view.html" className="btn btn--round btn--dark btn-quickview" data-toggle="modal" data-target="#quickView">
          		<span className="icon  icon-search" /></a>
          </div>
          <div className="product-preview__info__title">
            <h2><a href="#">{ props.item.title }</a></h2>
          </div>
          <div className="rating"><span className="icon-star" />
          	<span className="icon-star" /><span className="icon-star" />
          	<span className="icon-star" /><span className="icon-star" />
          </div>
          <ul className="options-swatch options-swatch--color">
            <li><a href="#"><span className="swatch-label"><img src="images/colors/blue.png" width={10} height={10} alt /></span></a></li>
            <li><a href="#"><span className="swatch-label"><img src="images/colors/yellow.png" width={10} height={10} alt /></span></a></li>
            <li><a href="#"><span className="swatch-label"><img src="images/colors/green.png" width={10} height={10} alt /></span></a></li>
            <li><a href="#"><span className="swatch-label"><img src="images/colors/dark-grey.png" width={10} height={10} alt /></span></a></li>
            <li><a href="#"><span className="swatch-label"><img src="images/colors/grey.png" width={10} height={10} alt /></span></a></li>
            <li><a href="#"><span className="swatch-label"><img src="images/colors/red.png" width={10} height={10} alt /></span></a></li>
            <li><a href="#"><span className="swatch-label"><img src="images/colors/white.png" width={10} height={10} alt /></span></a></li>
          </ul>
          <div className="price-box ">
          	<span className="price-box__new">${ props.item.cost }</span> 
          	<span className="price-box__old">$84.00</span></div>
          <div className="product-preview__info__description">
            <p>{ props.item.summary }.</p>
            <p>Suspendisse consectetur odio diam, ut consequat quam aliquet at.</p>
          </div>
          <div className="product-preview__info__link"><a href="#" className="compare-link">
          <span className="icon icon-bars" />
          <span className="product-preview__info__link__text">Add to compare</span></a> 
          <a href="#" className="ajax-to-wishlist"><span className="icon icon-favorite" />
          <span className="product-preview__info__link__text">Add to wishlist</span></a>
          <a href="#" className="btn btn--wd buy-link"><span className="icon icon-ecommerce" />
          <span className="product-preview__info__link__text">Add to cart</span></a></div>
        </div>
      </div>
      </div>
      </div>


    );
 };
