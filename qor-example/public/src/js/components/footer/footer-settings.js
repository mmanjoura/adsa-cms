import React from 'react';


export default () => {
		return (

		      <div className="footer__settings visible-xs">
		        <div className="container text-center">
		          <div className="dropdown pull-left"> <a href="#" className="btn dropdown-toggle btn--links--dropdown header__dropdowns__button" data-toggle="dropdown" aria-expanded="false"><span className="header__dropdowns__button__symbol">$</span></a>
		            <ul className="dropdown-menu animated fadeIn" role="menu">
		              <li className="currency__item currency__item--active"><a href="#">$ USA Dollar</a></li>
		              <li className="currency__item"><a href="#">€ Euro</a></li>
		              <li className="currency__item"><a href="#">£ British Pound</a></li>
		            </ul>
		          </div>
		          <div className="dropdown pull-left"> <a href="#" className="btn dropdown-toggle btn--links--dropdown header__dropdowns__button" data-toggle="dropdown" aria-expanded="false"><span className="flag"><img src="images/flags/gb.png" alt /></span></a>
		            <ul className="dropdown-menu animated fadeIn languages languages--flag" role="menu">
		              <li className="languages__item languages__item--active"><a href="#"><span className="languages__item__flag flag"><img src="images/flags/gb.png" alt /></span><span className="languages__item__label">En</span></a></li>
		              <li className="languages__item"><a href="#"><span className="languages__item__flag flag"><img src="images/flags/de.png" alt /></span><span className="languages__item__label">De</span></a></li>
		              <li className="languages__item"><a href="#"><span className="languages__item__flag flag"><img src="images/flags/fr.png" alt /></span><span className="languages__item__label">Fr</span></a></li>
		            </ul>
		          </div>
		          <div className="dropdown pull-left"> <a href="#" className="btn dropdown-toggle btn--links--dropdown header__dropdowns__button" data-toggle="dropdown" aria-expanded="false">Account</a>
		            <ul className="dropdown-menu animated fadeIn" role="menu">
		              <li><a href="#">Account</a></li>
		              <li><a href="#">Wishlist</a></li>
		              <li><a href="#">Compare</a></li>
		              <li><a href="#">Checkout</a></li>
		            </ul>
		          </div>
		        </div>
		      </div>
		    );
  
};