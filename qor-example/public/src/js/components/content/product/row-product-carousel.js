import React from 'react';
import AppStore from '../../../stores/app-store';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';
import CatalogItem from '../../catalog/app-catalogitem';
import FeaturedHeader from '../featured-header'

import Search from '../../search/modal-search'
import ContentParallax from '../../blog/content-parallax'
import ProductCategoriesCarousel from '../../productCategories/product-category-carousel'
import ProductsBrandsCarousel from '../../productsBrands/products-brands-carousel'
import StaggeredAnimationContainer from '../../staggeredAnimation/staggered-animation-container'
import Slider from '../../content/slider'
import Footer from '../../footer/footer'

import CompareBox from '../compare-box'
import ProductPreview from './product-preview'

function getCatalog() {
    return {items: AppStore.getCatalog()}
}

const Catalog = ( props ) => {
    var items = props.items.map( ( item ) => {
        return <ProductPreview key={ item.id } item={ item } />
    } );
    return (
    	<div>
            <section className="content">
                <div className="container"> 
                    <FeaturedHeader />
                    <h2 className="text-center text-uppercase">Featured Products</h2>
                    <div className="row product-carousel-layout1  mobile-special-arrows product-grid four-in-row  rows-2 animated-arrows products-listing  slick-initialized slick-slider">
                      <div aria-live="polite" className="slick-list draggable" tabIndex={0}><div className="slick-track" style={{opacity: 1, width: 1172, transform: 'translate3d(0px, 0px, 0px)'}}>
                        
        	                       { items }
        	         
                            </div>
                        </div>
                     </div>
                 </div>
            </section>





            <ContentParallax />
            <ProductCategoriesCarousel />
            <ProductsBrandsCarousel />
            <StaggeredAnimationContainer />
            <CompareBox />
            
        </div>
    );
};

export default StoreWatchMixin( Catalog, getCatalog );