import React from 'react';


export default () => {
	    return (

        <section className="content content--fill">
          <div className="container"> 
            {/* Nav tabs */}
            <ul className="nav nav-tabs nav-tabs--wd" role="tablist">
              <li className="active"><a href="#Tab1" aria-controls="home" role="tab" data-toggle="tab" className="text-uppercase">DESCRIPTION</a></li>
              <li><a href="#Tab2" role="tab" data-toggle="tab" className="text-uppercase">Reviews</a></li>
              <li><a href="#Tab3" role="tab" data-toggle="tab" className="text-uppercase">Tags</a></li>
              <li><a href="#Tab4" role="tab" data-toggle="tab" className="text-uppercase">CUSTOM TAB</a></li>
              <li><a href="#Tab5" role="tab" data-toggle="tab" className="text-uppercase">Sizing Guide</a></li>
            </ul>
            {/* Tab panes */}
            <div className="tab-content tab-content--wd">
              <div role="tabpanel" className="tab-pane active" id="Tab1">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec eros tellus, scelerisque nec, rhoncus eget, sollicitudin eu, vehicula venenatis, tempor vitae, est. Praesent vitae dui. Morbi id tellus. Nullam ac nisi non eros gravida venenatis. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu dictum justo urna et mi. Integer dictum est vitae sem. Vestibulum justo. Nulla mauris ipsum, convallis ut, vestibulum eu, tincidunt vel, nisi. Curabitur molestie euismod erat. Proin eros odio, mattis rutrum, pulvinar et, egestas vitae, magna. Integer semper, velit ut nisl. Nam lectus nulla, bibendum pretium, dictum a, mattis nec, dolor. Nullam id justo sed diam aliquam tincidunt. </p>
                <div className="divider divider--xs" />
                <table className="table table-params">
                  <tbody>
                    <tr>
                      <td className="text-right"><strong>PROOF</strong></td>
                      <td>PDF Proof</td>
                    </tr>
                    <tr>
                      <td className="text-right"><strong>SAMPLES</strong></td>
                      <td>Digital, Printed</td>
                    </tr>
                    <tr>
                      <td className="text-right"><strong>WRAPPING</strong></td>
                      <td>Yes,  No</td>
                    </tr>
                    <tr>
                      <td className="text-right"><strong>UV GLOSS COATING</strong></td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td className="text-right"><strong>SHRINK WRAPPING</strong></td>
                      <td>No Shrink Wrapping, Shrink in 25s, Shrink in 50s, Shrink in 100s</td>
                    </tr>
                    <tr>
                      <td className="text-right"><strong>WEIGHT</strong></td>
                      <td>0.05, 0.06, 0.07ess cards</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div role="tabpanel" className="tab-pane" id="Tab2">
                <h6><strong>CUSTOMER REVIEWS 1 ITEM(S)</strong></h6>
                <p> GREAT!</p>
                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec eros tellus, scelerisque nec, rhoncus eget, sollicitudin eu, vehicula venenatis, tempor vitae, est. Praesent vitae dui. Morbi id tellus. Nullam ac nisi non eros gravida venenatis. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu dictum justo urna et mi. Integer dictum est vitae sem. </p>
                <div className="divider divider--xs" />
                <table className="table table-params">
                  <tbody>
                    <tr>
                      <td className="text-right"><strong>QUALITY</strong></td>
                      <td><div className="rating rating--big"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star empty-star" /></div></td>
                    </tr>
                    <tr>
                      <td className="text-right"><strong>PRICE</strong></td>
                      <td><div className="rating rating--big"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star empty-star" /></div></td>
                    </tr>
                    <tr>
                      <td className="text-right"><strong>VALUE</strong></td>
                      <td><div className="rating rating--big"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star empty-star" /></div></td>
                    </tr>
                  </tbody>
                </table>
                <p className="color-light">Review by User / (posted on 16/9/2016)</p>
                <div className="divider divider--xs" />
                <h6><strong>WRITE YOUR OWN REVIEW</strong></h6>
                <p>YOU'RE REVIEWING:  Lorem ipsum dolor sit amet conse ctetur</p>
                <p>HOW DO YOU RATE THIS PRODUCT?</p>
                <div className="divider divider--xs" />
                <div className="table-responsive">
                  <table className="table table-params">
                    <tbody>
                      <tr>
                        <td className="text-right" />
                        <td className="text-center"><div className="rating rating--big"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star empty-star" /></div></td>
                        <td className="text-center"><div className="rating rating--big"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star empty-star" /></div></td>
                        <td className="text-center"><div className="rating rating--big"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star empty-star" /></div></td>
                        <td className="text-center"><div className="rating rating--big"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star empty-star" /></div></td>
                        <td className="text-center"><div className="rating rating--big"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star empty-star" /></div></td>
                      </tr>
                      <tr>
                        <td className="text-right"><strong>QUALITY</strong></td>
                        <td className="text-center"><span className="icon-enable">●</span></td>
                        <td className="text-center"><span className="icon-disable">●</span></td>
                        <td className="text-center"><span className="icon-disable">●</span></td>
                        <td className="text-center"><span className="icon-disable">●</span></td>
                        <td className="text-center"><span className="icon-disable">●</span></td>
                      </tr>
                      <tr>
                        <td className="text-right"><strong>PRICE</strong></td>
                        <td className="text-center"><span className="icon-disable">●</span></td>
                        <td className="text-center"><span className="icon-disable">●</span></td>
                        <td className="text-center"><span className="icon-enable">●</span></td>
                        <td className="text-center"><span className="icon-disable">●</span></td>
                        <td className="text-center"><span className="icon-disable">●</span></td>
                      </tr>
                      <tr>
                        <td className="text-right"><strong>VALUE</strong></td>
                        <td className="text-center"><span className="icon-disable">●</span></td>
                        <td className="text-center"><span className="icon-disable">●</span></td>
                        <td className="text-center"><span className="icon-disable">●</span></td>
                        <td className="text-center"><span className="icon-enable">●</span></td>
                        <td className="text-center"><span className="icon-disable">●</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="divider divider--xs" />
                <form action="#" className="contact-form">
                  <label>Nickname<span className="required">*</span></label>
                  <input type="text" className="input--wd input--wd--full" />
                  <label>Summary of Your Review<span className="required">*</span></label>
                  <input type="text" className="input--wd input--wd--full" />
                  <label>Review<span className="required">*</span></label>
                  <textarea className="textarea--wd input--wd--full" defaultValue={""} />
                  <div className="divider divider--xs" />
                  <button type="submit" className="btn btn--wd text-uppercase wave">Submit Review</button>
                </form>
              </div>
              <div role="tabpanel" className="tab-pane" id="Tab3">
                <h6><strong>OTHER PEOPLE MARKED THIS PRODUCT WITH THESE TAGS:</strong></h6>
                <p className="color-light">Pattern (1)</p>
                <div className="divider divider--xs" />
                <p className="text-uppercase">Add Your Tags:</p>
                <form action="#" className="contact-form">
                  <input type="text" className="input--wd input--wd--full" />
                  <p className="color-light">Use spaces to separate tags. Use single quotes (') for phrases.</p>
                  <div className="divider divider--xs" />
                  <button type="submit" className="btn btn--wd text-uppercase wave">Add Tags</button>
                </form>
              </div>
              <div role="tabpanel" className="tab-pane" id="Tab4">
                <h6><strong>Lorem ipsum dolor sit amet conse ctetur adipisicing elit</strong></h6>
                <div className="divider divider--xs" />
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec eros tellus, scelerisque nec, rhoncus eget, sollicitudin eu, vehicula venenatis, tempor vitae, est. Praesent vitae dui. Morbi id tellus. Nullam ac nisi non eros gravida venenatis. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu dictum justo urna et mi. Integer dictum est vitae sem. Vestibulum justo. Nulla mauris ipsum, convallis ut, vestibulum eu, tincidunt vel, nisi. Curabitur molestie euismod erat. Proin eros odio, mattis rutrum, pulvinar et, egestas vitae, magna. Integer semper, velit ut nisl. Nam lectus nulla, bibendum pretium, dictum a, mattis nec, dolor. Nullam id justo sed diam aliquam tincidunt. </p>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="simple-list">
                      <li>Lorem ipsum dolor amet</li>
                      <li>Consectetur adipiscing elit </li>
                      <li>Integer molestie lorem massa </li>
                      <li>Facilisis in pretium nisl aliquet</li>
                    </ul>
                    <div className="divider divider--xs visible-sm visible-xs" />
                  </div>
                  <div className="col-sm-6">
                    <ul className="simple-list">
                      <li>Lorem ipsum dolor amet</li>
                      <li>Consectetur adipiscing elit </li>
                      <li>Integer molestie lorem massa </li>
                      <li>Facilisis in pretium nisl aliquet </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="Tab5">
                <h6 className="text-uppercase"><strong>Clothing - Single Size Conversion (Continued)</strong></h6>
                <div className="divider divider--xs" />
                <div className="table-responsive">
                  <table className="table table-params">
                    <tbody>
                      <tr>
                        <td className="text-right"><strong>UK</strong></td>
                        <td><ul className="sizes-row">
                            <li>18</li>
                            <li>20</li>
                            <li>22</li>
                            <li>24</li>
                            <li>26</li>
                          </ul></td>
                      </tr>
                      <tr>
                        <td className="text-right"><strong>European</strong></td>
                        <td><ul className="sizes-row">
                            <li>46</li>
                            <li>48</li>
                            <li>50</li>
                            <li>52</li>
                            <li>54</li>
                          </ul></td>
                      </tr>
                      <tr>
                        <td className="text-right"><strong>US</strong></td>
                        <td><ul className="sizes-row">
                            <li>14</li>
                            <li>16</li>
                            <li>18</li>
                            <li>20</li>
                            <li>22</li>
                          </ul></td>
                      </tr>
                      <tr>
                        <td className="text-right"><strong>Australia</strong></td>
                        <td><ul className="sizes-row">
                            <li>8</li>
                            <li>10</li>
                            <li>12</li>
                            <li>14</li>
                            <li>16</li>
                          </ul></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

	    );
	 };