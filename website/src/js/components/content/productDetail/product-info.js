import React from 'react';


export default () => {
	    return (

        <section className="content">
          <div className="container">
            <div className="row product-info-outer">
              <div className="col-sm-6 hidden-xs">
                <div className="product-main-image">
                  <div className="product-main-image__item">
                  <img className="product-zoom" src="images/swimwear/products/product-big-1.jpg" data-zoom-image="images/swimwear/products/product-big-1-zoom.jpg" />
                </div>
                  <div className="product-main-image__zoom" />
                </div>
                <div className="product-images-carousel">
                  <ul id="smallGallery">
                    <li><a href="#" data-image="images/swimwear/products/product-big-1.jpg" data-zoom-image="images/swimwear/products/product-big-1-zoom.jpg"><img src="images/swimwear/products/product-small-1.jpg" alt /></a></li>
                    <li><a href="#" data-image="images/swimwear/products/product-big-2.jpg" data-zoom-image="images/swimwear/products/product-big-2-zoom.jpg"><img src="images/swimwear/products/product-small-2.jpg" alt /></a></li>
                    <li><a href="#" data-image="images/swimwear/products/product-big-3.jpg" data-zoom-image="images/swimwear/products/product-big-3-zoom.jpg"><img src="images/swimwear/products/product-small-3.jpg" alt /></a></li>
                    <li><a href="#" data-image="images/swimwear/products/product-big-4.jpg" data-zoom-image="images/swimwear/products/product-big-4-zoom.jpg"><img src="images/swimwear/products/product-small-4.jpg" alt /></a></li>
                    <li><a href="#" data-image="images/swimwear/products/product-big-5.jpg" data-zoom-image="images/swimwear/products/product-big-5-zoom.jpg"><img src="images/swimwear/products/product-small-5.jpg" alt /></a></li>
                    <li><a href="http://www.youtube.com/watch?v=JW8M32oHTKw" className="video-link"><img src="images/products/product-small-empty.png" alt /></a></li>
                  </ul>
                </div>
                <div className="modal fade zoom" id="videoModal" tabIndex={-1} role="dialog" aria-labelledby="videoModal" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">✕ </button>
                        <div>
                          <iframe width="100%" height={350} src />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-info col-sm-6">
                <div className="product-info__title">
                  <h2>So High Two-Piece Set</h2>
                  <div className="rating product-info__rating visible-xs">
                  <span className="icon-star" /><span className="icon-star" />
                  <span className="icon-star" /><span className="icon-star" />
                </div>
                </div>
                <div className="product-info__sku pull-right">SKU: 00065 &nbsp;&nbsp;
                  <span className="label label-success">IN STOCK</span>
                </div>
                <ul id="singleGallery" className="visible-xs">
                  <li><img src="images/swimwear/products/product-big-1.jpg" alt /></li>
                  <li><img src="images/swimwear/products/product-big-2.jpg" alt /></li>
                  <li><img src="images/swimwear/products/product-big-3.jpg" alt /></li>
                  <li><img src="images/swimwear/products/product-big-4.jpg" alt /></li>
                  <li><img src="images/swimwear/products/product-big-5.jpg" alt /></li>
                </ul>
                <div className="price-box product-info__price">
                  <span className="price-box__new">$65.00</span> 
                  <span className="price-box__old">$84.00</span>
                </div>
                <div className="rating product-info__rating hidden-xs"><span className="icon-star" />
                  <span className="icon-star" />
                  <span className="icon-star" /><span className="icon-star" />
                  <span className="icon-star" />
                </div>
                <div className="divider divider--xs product-info__divider" />
                <div className="product-info__description"> 
                  Vestibulum justo. Nulla mauris ipsum, convallis ut, vestibulum eu, 
                  tincidunt vel, nisi. Curabitur molestie euismod erat. Proin eros odio, 
                  mattis rutrum, pulvinar et, egestas vitae, magna. Integer semper, 
                  velit ut interdum malesuada, diam dolor pellentesque lacus, vitae commodo orci nisi et sem. 
                  Pellentesque adipiscing nisi. Nulla facilisi. Mauris lacinia lectus sit amet felis. 
                </div>
                <div className="divider divider--xs product-info__divider" />
                <label>Size:</label>
                <ul className="options-swatch options-swatch--size options-swatch--lg">
                  <li>XS</li>
                  <li>S</li>
                  <li>M</li>
                  <li>L</li>
                  <li>XL</li>
                  <li>XXL</li>
                  <li>XXXL</li>
                </ul>
                <div className="divider divider--xs" />
                <label>Color:</label>
                <ul className="options-swatch options-swatch--color options-swatch--lg">                  
                  <li><a href="#"><span className="swatch-label"><img src="images/colors/blue.png" width={10} height={10} alt /></span></a></li>
                  <li><a href="#"><span className="swatch-label"><img src="images/colors/yellow.png" width={10} height={10} alt /></span></a></li>
                  <li><a href="#"><span className="swatch-label"><img src="images/colors/green.png" width={10} height={10} alt /></span></a></li>
                  <li><a href="#"><span className="swatch-label"><img src="images/colors/dark-grey.png" width={10} height={10} alt /></span></a></li>
                  <li><a href="#"><span className="swatch-label"><img src="images/colors/grey.png" width={10} height={10} alt /></span></a></li>
                  <li><a href="#"><span className="swatch-label"><img src="images/colors/red.png" width={10} height={10} alt /></span></a></li>
                  <li><a href="#"><span className="swatch-label"><img src="images/colors/white.png" width={10} height={10} alt /></span></a></li>
                </ul>
                <div className="divider divider--sm" />
                <label>Quantity:</label>
                <div className="outer">
                  <div className="input-group-qty pull-left"> <span className="pull-left"> </span>
                    <input type="text" name="quant[1]" className="input-number input--wd input-qty pull-left" defaultValue={1} min={1} max={100} />
                    <span className="pull-left btn-number-container">
                      <button type="button" className="btn btn-number btn-number--plus" data-type="plus" data-field="quant[1]"> + </button>
                      <button type="button" className="btn btn-number btn-number--minus" disabled="disabled" data-type="minus" data-field="quant[1]"> – </button>
                    </span> </div>
                  <div className="pull-left">
                    <button className="btn btn--wd text-uppercase">Add to Cart</button>
                  </div>
                  <div className="social-links social-links--colorize social-links--invert social-links--padding pull-right">
                    <ul>
                      <li className="social-links__item"><a className="icon icon-facebook tooltip-link" href="#" data-placement="top" data-toggle="tooltip" data-original-title="Share on facebook" /></li>
                      <li className="social-links__item"><a className="icon icon-twitter tooltip-link" href="#" data-placement="top" data-toggle="tooltip" data-original-title="Share on twitter" /></li>
                      <li className="social-links__item"><a className="icon icon-google tooltip-link" href="#" data-placement="top" data-toggle="tooltip" data-original-title="Share on google" /></li>
                      <li className="social-links__item"><a className="icon icon-pinterest tooltip-link" href="#" data-placement="top" data-toggle="tooltip" data-original-title="Share on pinterest" /></li>
                    </ul>
                  </div>
                </div>
                <div className="divider divider--xs" />
                <ul className="product-links product-links--inline">
                  <li><a href="#"><span className="icon icon-bars" />Add to compare</a></li>
                  <li><a href="#"><span className="icon icon-favorite" />Add to wishlist</a></li>
                  <li><a href="#"><span className="icon icon-mail-fill" />Email to friend</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

	    );
	 };