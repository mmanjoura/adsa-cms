import React from 'react';
import AppStore from '../../../stores/app-store';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';
import AppActions from '../../../actions/app-actions'
import CartButton from '../../cart/app-cart-button';
import { Link } from 'react-router';

function getCatalogItem( props ) {
    let item = AppStore.getCatalog().find( ({ id } ) => id === props.params.item )
    return {item};
}

const CatalogDetail = ( props ) => {
    return (
        <div>
            <h2>{ props.item.title }</h2>
            <img src="http://placehold.it/250x250" alt=""/>
            <p>{ props.item.description }</p>
            <p>${ props.item.cost } <span className="text-success">
              { props.item.qty && '(' + props.item.qty + ' in cart)' }
            </span>
            </p>
            <div className="btn-group">
                <Link to='/' className="btn btn-default btn-sm">Continue Shopping</Link>
                <CartButton txt="Add ToCart" handler={AppActions.addItem.bind(null, props.item )} />
            </div>
        </div>
    );
};

export default StoreWatchMixin( CatalogDetail, getCatalogItem );
