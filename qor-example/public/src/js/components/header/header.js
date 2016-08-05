import React from 'react';
import SocialLinks from './menu/social-links'
import UserLinks from './menu/user-links'
import HeaderDropDownsContainer from './menu/header-dropdowns-container'
import NavBar from './menu/navbar/navbar'

import TopHeader from './menu/top-header'

export default ( props ) => {
    return (

		<header className="header header--sticky">		
			<TopHeader />
	        <HeaderDropDownsContainer />
	       <NavBar />
		</header>
	);
};