import React from 'react';


export default () => {
	   return (

	      <div className="row hide-outer-animation">
	        <div className="col-md-6">
	          <div className="text-center">
	            <div className="banner layout1 banner--image hover-squared animation" data-animation="fadeInLeft" data-animation-delay="0s" onclick="location.href='#';"> <img src="images/swimwear/banner-01.jpg" alt className="img-responsive" />
	              <div className="banner--image__text banner--image__text--left banner--image__text--light">
	                <h5><em>new savings!</em></h5>
	                <h3 id="responsive_headline"><strong>Swim Sale</strong></h3>
	                <h6><strong>Up to 65% OFF</strong></h6>
	                <button className="btn btn--wd text-uppercase wave waves-effect" type="button">READ MORE</button>
	              </div>
	              <div className="product-category__hover caption" />
	            </div>
	          </div>
	        </div>
	        <div className="col-md-6">
	          <div className="banner banner--icon hover-squared animation" data-animation="fadeInRight" data-animation-delay="0s" onclick="location.href='#';">
	            <div className="banner--icon__icon"> <span className="icon icon-sales" /> </div>
	            <div className="banner--icon__text text-center">
	              <h4 className="text-uppercase">TOTAL SALE</h4>
	              <div className="banner--icon__text__divider" />
	              <div className="text-uppercase">UP TO 70% OFF YOUR FAVOURITE BRANDS</div>
	            </div>
	            <div className="product-category__hover caption" />
	          </div>
	          <div className="banner banner--icon banner--last banner--light hover-squared animation" data-animation="fadeInRight" data-animation-delay="0s" onclick="location.href='#';">
	            <div className="banner--icon__icon"> <span className="icon icon-box" /> </div>
	            <div className="banner--icon__text text-center">
	              <h4 className="text-uppercase">Gift CERTIFICATES</h4>
	              <div className="banner--icon__text__divider" />
	              <div className="text-uppercase">Gift certificates are the simplest, speediest way to send something special! </div>
	            </div>
	            <div className="product-category__hover caption" />
	          </div>
	        </div>
	      </div>
	    );
  
};