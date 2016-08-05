import React from 'react';
import BreadCrumb from '../breadcrumbs'
import ProductInfo from './product-info'
import ProductReview from './product-review'

export default () => {
	    return (
	    <div>
			<BreadCrumb />
	     	<ProductInfo />
	     	<ProductReview />

	        <section className="content ">
	          <div className="container"> 
	            {/* Modal */}
	            <div className="modal quick-view zoom" id="quickView" style={{opacity: 1}}>
	              <div className="modal-dialog">
	                <div className="modal-content"> </div>
	              </div>
	            </div>
	            {/* /.modal */}
	          </div>
	        </section>
	     </div>
	    

		    );
};