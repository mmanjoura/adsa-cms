import React from 'react';
import ProductCategory from './product-category'
import ProductCategoriesTitle from './product-categories-title'


export default () => {
	    return (

	        <section className="content">
      			<div className="container">
	      	  		<ProductCategoriesTitle />
		      		<div className="product-category-carousel mobile-special-arrows slick animated-arrows">
						<ProductCategory />
						<ProductCategory />
						<ProductCategory />
						<ProductCategory />
						<ProductCategory />
						<ProductCategory />
						<ProductCategory />
		      		</div>
	      		</div>
	      	</section>
	    );
  
};