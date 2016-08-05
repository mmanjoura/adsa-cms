import React from 'react';
import SocialLinks from './social-links'
import UserLinks from './user-links'


export default ( props ) => {
    return (

			<div className="header-line hidden-xs">
	          <div className="container">
	            <div className="pull-left">
	              <SocialLinks />
	            </div>
	            <div className="pull-right">
	         		<UserLinks />
	            </div>
	          </div>
	        </div>
	);
};