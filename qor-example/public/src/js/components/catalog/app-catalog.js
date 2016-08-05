import React from 'react';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import CatalogItem from '../catalog/app-catalogitem';
import FeaturedProducts from '../content/featured-products'
import RowProductCarousel from '../product/row-product-carousel'
import Search from '../search/modal-search'
import ContentParallax from '../blog/content-parallax'
import ProductCategoriesCarousel from '../productCategories/product-category-carousel'
import ProductsBrandsCarousel from '../productsBrands/products-brands-carousel'
import StaggeredAnimationContainer from '../staggeredAnimation/staggered-animation-container'
import Slider from '../content/slider'
import Footer from '../footer/footer'

import CompareBox from '../content/compare-box'

function getCatalog() {
    return {items: AppStore.getCatalog()}
}

const Catalog = ( props ) => {
    var items = props.items.map( ( item ) => {
        return <CatalogItem key={ item.id } item={ item } />
    } );
    return (
    	<div>
            <Slider />
            <Search />
            <FeaturedProducts />
	        <div className="row">
	            { items }
	        </div>
            <RowProductCarousel />
            <ContentParallax />
            <ProductCategoriesCarousel />
            <ProductsBrandsCarousel />
            <StaggeredAnimationContainer />
            <CompareBox />
            
        </div>
    );
};

export default StoreWatchMixin( Catalog, getCatalog );
