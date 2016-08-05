import React from 'react';


export default () => {
		return (

		      <div className="footer__subscribe">
		        <div className="container">
		          <div className="row">
		            <div className="col-sm-7 col-md-6">
		              <form id="subscribe-form" className="subscribe-form" action="#" method="post">
		                <label className="subscribe-form__label text-uppercase pull-left">Subscribe</label>
		                <input type="text" className="subscribe-form__input input--wd" placeholder="Your e-mail address" />
		                <button className="btn btn--wd text-uppercase wave"><span className="hidden-xs">Subscribe</span><span className="icon icon-mail-fill visible-xs" /></button>
		              </form>
		            </div>
		            <div className="col-sm-5 col-md-6">
		              <div className="social-links social-links--colorize social-links--large">
		                <ul>
		                  <li className="social-links__item"><a className="icon icon-facebook" href="http://www.facebook.com/" /></li>
		                  <li className="social-links__item"><a className="icon icon-twitter" href="http://www.twitter.com/" /></li>
		                  <li className="social-links__item"><a className="icon icon-google" href="http://www.google.com/" /></li>
		                  <li className="social-links__item"><a className="icon icon-linkedin" href="http://www.linkedin.com/" /></li>
		                  <li className="social-links__item"><a className="icon icon-pinterest" href="http://www.pinterest.com/" /></li>
		                  <li className="social-links__item"><a className="icon icon-mail" href="mailto:mail@google.com" /></li>
		                </ul>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    );
  
};