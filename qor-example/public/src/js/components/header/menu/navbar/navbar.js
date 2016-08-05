import React from 'react';
import Logo from './logo'
import LevelMenuLevel1 from './level-menu-level1'
import MegamenuColumnsTopBlock from './megamenu-columns-top-block'
import MegaMenuColumnsBottomBlock from './megamenu-columns-bottom-block'
import MegaMenuColumnsSideImage from  './megamenu-columns-side-image'

export default () => {
		
		    return (
<div className="sticky-wrapper">
	 <nav className="navbar navbar-wd" id="navbar">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" id="slide-nav"> 
              <span className="icon-bar" /> <span className="icon-bar" /> 
              <span className="icon-bar" /> </button>
         	    <Logo />
            </div>
            <div className="pull-left search-focus-fade" id="slidemenu">
              <div className="slidemenu-close visible-xs">✕</div>
              <ul className="nav navbar-nav">     
     			   {/*----*/}
                  <li className="menu-large">
                    <a href="listing.html" className="dropdown-toggle">
                      <span className="link-name">FASHION</span>
                      <span className="caret caret--dots" />
                    </a>
                  <div className="dropdown-menu megamenu animated fadeIn">
                    <div className="container">
                      <ul className="megamenu__columns">
                  		  <MegamenuColumnsTopBlock />
    					          <LevelMenuLevel1 />
                     	  <MegaMenuColumnsBottomBlock />
                        <MegaMenuColumnsSideImage />
                      </ul>
                    </div>
                  </div>
                </li>
                {/*----*/}
                <li className="menu-large">
                  <a href="listing.html" className="dropdown-toggle">
                    <span className="link-name">HEALTH & BEAUTY</span>
                    <span className="caret caret--dots" />
                  </a>
                <div className="dropdown-menu megamenu animated fadeIn">
                  <div className="container">
                    <ul className="megamenu__columns">
                      <MegamenuColumnsTopBlock />
                      <LevelMenuLevel1 />
                      <MegaMenuColumnsBottomBlock />
                      <MegaMenuColumnsSideImage />
                    </ul>
                  </div>
                </div>
              </li>
               {/*----*/}
              <li className="menu-large">
                <a href="listing.html" className="dropdown-toggle">
                  <span className="link-name">CRAFT</span>
                  <span className="caret caret--dots" />
                </a>
              <div className="dropdown-menu megamenu animated fadeIn">
                <div className="container">
                  <ul className="megamenu__columns">
                    <MegamenuColumnsTopBlock />
                    <LevelMenuLevel1 />
                    <MegaMenuColumnsBottomBlock />
                    <MegaMenuColumnsSideImage />
                  </ul>
                </div>
              </div>
            </li>
             {/*----*/}
            <li className="menu-large">
              <a href="listing.html" className="dropdown-toggle">
                <span className="link-name">FOOD & SPACES</span>
                <span className="caret caret--dots" />
              </a>
            <div className="dropdown-menu megamenu animated fadeIn">
              <div className="container">
                <ul className="megamenu__columns">
                  <MegamenuColumnsTopBlock />
                  <LevelMenuLevel1 />
                  <MegaMenuColumnsBottomBlock />
                  <MegaMenuColumnsSideImage />
                </ul>
              </div>
            </div>
          </li>
        
              </ul>
            </div>
          </div>
        </nav>
      </div>
		    );
};
