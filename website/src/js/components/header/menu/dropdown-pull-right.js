import React from 'react';
import AppCurrencyConfig from './app-currency-config'
import AppLanguageConfig from './app-language-config'
import AppAccountConfig from './app-account-config'

export default ( props ) => {
    return (

	<div className="dropdown pull-right"> 
		<a href="#" className="btn dropdown-toggle btn--links--dropdown header__dropdowns__button" data-toggle="dropdown">
			<span className="icon icon-dots" />
		</a>
	      <ul className="dropdown-menu ul-row animated fadeIn" role="menu">
	        <AppCurrencyConfig />
	     	<AppLanguageConfig />
	        <AppAccountConfig />
	      </ul>
	 </div>
	    );
};