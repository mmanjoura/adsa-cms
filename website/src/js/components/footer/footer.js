import React from 'react';
import FooterBottom from './footer-bottom';
import FooterSettings from './footer-settings'
import FooterSubscribe from './footer-subscribe'
import FooterColumnLinks from './footer-column-links'
import FooterLinks from './footer-links'

export default ( props ) => {
     return (

      <footer className="footer">
	      <FooterLinks />
	      <FooterColumnLinks />
	      <FooterSubscribe />
	      <FooterSettings />
	      <FooterBottom />
      </footer>
    );
};