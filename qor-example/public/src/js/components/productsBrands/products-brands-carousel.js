import React from 'react';
import ProductsBrandsTitle from './products-brands-title'
import ProductsBrandsItem from './products-brands-item'
import Divider from '../general/divider'
import RowHideOuterAnimation from './row-hide-outer-animation'

export default () => {
	    
	     	    return (

		    <section className="content content--fill">
		        <div className="container">
		        	<ProductsBrandsTitle />
		          	<div className="brands brands-carousel mobile-special-arrows animated-arrows">
			          	<ProductsBrandsItem />
			          	<ProductsBrandsItem />
			          	<ProductsBrandsItem />
			          	<ProductsBrandsItem />
			          	<ProductsBrandsItem />
			          	<ProductsBrandsItem />
			          	<ProductsBrandsItem />
			          	<ProductsBrandsItem />
			          	<ProductsBrandsItem />
			          	<ProductsBrandsItem />
			          	<ProductsBrandsItem />
			          	<ProductsBrandsItem />
			         </div>
			        <Divider />
			          	<RowHideOuterAnimation />
					
		        </div>
		    </section>
		    

				    
			);
  
};