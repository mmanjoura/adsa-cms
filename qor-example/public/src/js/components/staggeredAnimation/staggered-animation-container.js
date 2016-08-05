import React from 'react';
import NewArrivals from './new-arrivals'
import SaleProducts from './sale-products'
import NewProducts from './new-products'
import Testimonials from './testimonials'

export default () => {


    return (

	      <section className="content">
	        <div className="container">
	          <div className="row staggered-animation-container">
	          <NewArrivals />
	          <Testimonials />
	          <NewProducts />
	          <SaleProducts />
	          </div>
	        </div>
	      </section>
	    );

};