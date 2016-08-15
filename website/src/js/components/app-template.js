import React from 'react';
import Header from './header/header'
import Footer from './footer/footer'
import Slider from './content/slider'


export default ( props ) => {
    return (

        <div className="wrapper">
            <Header />
            <div id="pageContent" className="page-content">
                <Slider  /> 
	            { props.children }
	         </div>
            <Footer />
        </div>
    );
};

