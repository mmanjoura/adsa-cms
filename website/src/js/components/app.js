import React from 'react';
import ProductList from './content/product/row-product-carousel';
import Cart from './cart/app-cart';
import ProductDetail from './content/productDetail/product-detail';
import Template from './app-template';
import { Router, Route, IndexRoute } from 'react-router';

export default () => {
    return (
        <Router>
            <Route path="/" component={ Template }>
            	<IndexRoute component={ ProductList }/>
            	<Route path="product" component={ ProductDetail } />
                <Route path="appcart" component={ Cart }/> 
            </Route>

        </Router>
    );
};
