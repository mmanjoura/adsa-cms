import React from 'react';


export default () => {
	    return (

   		<section className="breadcrumbs breadcrumbs-boxed">
          <div className="container">
            <ol className="breadcrumb breadcrumb--wd pull-left">
              <li><a href="#">Home</a></li>
              <li className="active">So High Two-Piece Set</li>
            </ol>
            <ul id="productOther" className="product-other pull-right hidden-xs">
              <li className="product-other__link product-prev"><a href="#">Tidal Wave Hipster Briefs</a>
	              	<span className="product-other__link__image">
	              		<img src="images/swimwear/products/product-4.jpg" />
	              	</span></li>
              <li className="product-other__link product-next"><a href="#">Meteor Leaderback One-Piece</a>
	              <span className="product-other__link__image">
	              	<img src="images/swimwear/products/product-3.jpg" />
	              </span>
              </li>
            </ul>
          </div>
        </section>

	    );
	 };