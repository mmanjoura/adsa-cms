import React from 'react';
import { Link } from 'react-router';

export default () => {
 		    return (
		      <div className="shopping-cart__settings">
		           <Link to="/appcart" >
               			<span className="icon icon-gear"></span>
            		</Link>
		      </div>
		    );
};
