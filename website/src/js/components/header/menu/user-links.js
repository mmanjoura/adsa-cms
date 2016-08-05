import React from 'react';

export default () => {
	    return (
	      <div className="user-links">
                <ul>
                  <li className="user-links__item"><a href="#">Sign In</a></li>
                  <li className="user-links__item"><a href="#">Register</a></li>
                  <li className="user-links__item user-links__item--separate">
                  	<a href="#" className="color-twitter">TWITTER</a> / 
                  	<a href="#" className="color-facebook">FACEBOOK</a> LOGIN
                  </li>
                </ul>
              </div>
	    );
};
