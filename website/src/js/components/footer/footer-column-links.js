import React from 'react';


export default () => {
		return (

		      <div className="footer__column-links">
		        <div className="back-to-top"> <a href="#top" className="btn btn--round btn--round--lg"><span className="icon-arrow-up" /></a></div>
		        <div className="container">
		          <div className="row">
		            <div className="col-md-3 hidden-xs hidden-sm"> 
		              {/*  Logo  */} 
		              <a className="logo logo--footer" href="index.html"> <img src="images/swimwear/logo-transparent.png" alt /> </a> 
		              {/* End Logo */}
		              {/* footer-excerption */}
		              <dl className="footer-excerption">              
		                <dd>This is one of the best, most attractive <br />and smartest templates on the market. </dd>
		                <dt><em>- Adam Smith</em></dt>
		              </dl>
		              {/* /footer-excerption */}
		            </div>
		            <div className="col-sm-3 col-md-2 mobile-collapse">
		              <h5 className="title text-uppercase mobile-collapse__title">Information </h5>
		              <div className="v-links-list mobile-collapse__content">
		                <ul>
		                  <li><a href="#">About Us</a></li>
		                  <li><a href="#">Shipping &amp; Returns</a></li>
		                  <li><a href="#">Privacy Notice</a></li>
		                  <li><a href="#">Conditions of Use</a></li>              
		                </ul>
		              </div>
		            </div>
		            <div className="col-sm-3 col-md-2 mobile-collapse">
		              <h5 className="title text-uppercase mobile-collapse__title">Service</h5>
		              <div className="v-links-list mobile-collapse__content">
		                <ul>
		                  <li><a href="#">Online support</a></li>
		                  <li><a href="#">Help &amp; FAQs</a></li>
		                  <li><a href="#">Call Center</a></li>   
		                </ul>
		              </div>
		            </div>
		            <div className="col-sm-3 col-md-2 mobile-collapse">
		              <h5 className="title text-uppercase mobile-collapse__title">My account</h5>
		              <div className="v-links-list mobile-collapse__content">
		                <ul>
		                  <li><a href="#">My Account</a></li>
		                  <li><a href="#">Order history</a></li>
		                  <li><a href="#">Advanced search</a></li>
		                  <li><a href="#">Reviews</a></li>                
		                </ul>
		              </div>
		            </div>
		            <div className="col-sm-3 col-md-3 mobile-collapse mobile-collapse--last">
		              <h5 className="title text-uppercase mobile-collapse__title">Company Info</h5>
		              <div className="v-links-list mobile-collapse__content">
		                <ul>
		                  <li className="icon icon-home">7563 St. Vincent Place, Glasgow</li>
		                  <li className="icon icon-telephone">321321321, 321321321</li>
		                  <li className="icon icon-mail"><a href="mailto:info@mydomain.com">info@mydomain.com</a></li>
		                  <li className="icon icon-skype"><a href="#">shop.test</a></li>
		                </ul>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    );
  
};