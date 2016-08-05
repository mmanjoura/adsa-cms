import React from 'react';

export default () => {
			return (
<section className="content " id="slider"> 
        {/* Slider section */} 
        {/*
    #################################
        - THEMEPUNCH BANNER -
    #################################
    */} 
        {/* START REVOLUTION SLIDER 3.1 rev5 fullwidth mode */}
        <div className="tp-banner-container layout1">
          <div className="tp-banner">
            <ul>
              {/* SLIDE  */}
              <li data-transition="fade" data-slotamount={1} data-masterspeed={1000} data-saveperformance="off" data-title="Slide"> 
                {/* MAIN IMAGE */} 
                <img  src="images/swimwear/slides/slide-1.jpg" alt="slide1" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" /> 
                {/* LAYERS */} 
                {/* LAYER NR. 1 */}
                <div className="tp-caption tp-caption1--wd-1  lfb ltt" data-x="center" data-y="center" data-voffset={-100} data-speed={600} data-start={800} data-easing="Power4.easeOut" data-endeasing="Power4.easeIn" style={{zIndex: 1}}>Sunshine Fiesta</div>
                {/* LAYER NR. 2 */}
                <div className="tp-caption tp-caption1--wd-2 lfb ltt" data-x="center" data-y="center" data-voffset={0} data-speed={600} data-start={900} data-easing="Power4.easeOut" data-endeasing="Power4.easeIn" style={{zIndex: 2}}><span />Summer 2015</div>
                {/* LAYER NR. 3 */}
                <div className="tp-caption tp-caption1--wd-3 lfb ltt" data-x="center" data-y="center" data-voffset={70} data-speed={600} data-start={1000} data-easing="Power4.easeOut" data-endeasing="Power4.easeIn" data-captionhidden="on" style={{zIndex: 3}}><em>Find the most flattering fits and eye-catching<br />
                    prints for every occasion and every body.</em></div>
                {/* LAYER NR. 4 */}
                <div className="tp-caption tp-caption1--wd-button  lfb ltt" data-x="center" data-y="center" data-voffset={160} data-speed={600} data-start={1100} data-easing="Power4.easeOut" data-endeasing="Power4.easeIn" style={{zIndex: 4}}><a href="#" className="btn btn--wd btn--xl scroll-to-content">SHOP NOW</a> </div>
              </li>
              {/* SLIDE  */}
              <li data-transition="fade" data-slotamount={1} data-masterspeed={1000} data-saveperformance="off" data-title="Slide"> 
                {/* MAIN IMAGE */} 
                <img src="images/swimwear/slides/slide-2.jpg" alt="slide2" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" /> 
                {/* LAYERS */} 
                {/* LAYER NR. 1 */}
                <div className="tp-caption tp-caption--wd-4  lfb ltt" data-x="center" data-y="center" data-voffset={-150} data-speed={600} data-start={800} data-easing="Power4.easeOut" data-endeasing="Power4.easeIn" style={{zIndex: 10}}>Welldone <span className="custom-color">:)</span></div>
                {/* LAYER NR. 2 */}
                <div className="tp-caption tp-caption--wd-5 lfb ltt" data-x="center" data-y="center" data-voffset={-70} data-speed={600} data-start={900} data-easing="Power4.easeOut" data-endeasing="Power4.easeIn" style={{zIndex: 10}}>The Most Popular Store</div>
                {/* LAYER NR. 3 */}
                <div className="tp-caption tp-caption--wd-6 lfb ltt" data-x="center" data-y="center" data-voffset={0} data-speed={600} data-start={1000} data-easing="Power4.easeOut" data-endeasing="Power4.easeIn" data-captionhidden="on" style={{zIndex: 10}}>Fully Customizable Responsive Theme</div>
                {/* LAYER NR. 4 */}
                <div className="tp-caption lfb ltt" data-x="center" data-y="center" data-voffset={100} data-speed={600} data-start={1100} data-easing="Power4.easeOut" data-endeasing="Power4.easeIn" style={{zIndex: 9}}><a href="#" className="btn btn--wd btn--xl scroll-to-content">SHOP NOW</a> </div>
                {/* IMAGE NR. 1 */}
                <div className="tp-caption  lft ltt rs-parallaxlevel-1" data-x={650} data-y={0} data-speed={900} data-start={1000} data-easing="Power4.easeOut" style={{zIndex: 5}}><img src="images/swimwear/slides/s7.png" alt="Image1" /></div>
                {/* IMAGE NR. 2 */}
                <div className="tp-caption  lfr ltr rs-parallaxlevel-3" data-x={900} data-y={130} data-speed={1000} data-start={1200} data-easing="Power4.easeOut" style={{zIndex: 5}}><img src="images/swimwear/slides/s11.png" alt="Image2" /></div>
                {/* IMAGE NR. 3 */}
                <div className="tp-caption  lft ltt rs-parallaxlevel-2" data-x={-100} data-y={-10} data-speed={900} data-start={1400} data-easing="Power4.easeOut" style={{zIndex: 5}}><img src="images/swimwear/slides/s1.png" alt="Image3" /></div>
                {/* IMAGE NR. 4 */}
                <div className="tp-caption  lfb ltb rs-parallaxlevel-2" data-x={-100} data-y={300} data-speed={900} data-start={1600} data-easing="Power4.easeOut" style={{zIndex: 6}}><img src="images/swimwear/slides/s2.png" alt="Image4" /></div>
                {/* IMAGE NR. 5 */}
                <div className="tp-caption  lfb ltb rs-parallaxlevel-1" data-x={690} data-y={430} data-speed={900} data-start={1000} data-easing="Power4.easeOut" style={{zIndex: 5}}><img src="images/swimwear/slides/s12.png" alt="Image5" /></div>
                {/* IMAGE NR. 6 */}
                <div className="tp-caption  fadeIn fadeOut rs-parallaxlevel-2" data-x={100} data-y={150} data-speed={900} data-start={1200} data-easing="Power4.easeOut" style={{zIndex: 6}}><img src="images/swimwear/slides/s4.png" alt="Image6" /></div>
                {/* IMAGE NR. 7 */}
                <div className="tp-caption  lfb ltb rs-parallaxlevel-3" data-x={330} data-y={620} data-speed={900} data-start={2000} data-easing="Power4.easeOut" style={{zIndex: 6}}><img src="images/swimwear/slides/s9.png" alt="Image7" /></div>
                {/* IMAGE NR. 8 */}
                <div className="tp-caption  lft ltt rs-parallaxlevel-2" data-x={350} data-y={0} data-speed={900} data-start={600} data-easing="Power4.easeOut" style={{zIndex: 7}}><img src="images/swimwear/slides/s6.png" alt="Image8" /></div>
                {/* IMAGE NR. 9 */}
                <div className="tp-caption  lfr ltr rs-parallaxlevel-2" data-x={950} data-y={600} data-speed={900} data-start={2400} data-easing="Power4.easeOut" style={{zIndex: 7}}><img src="images/swimwear/slides/s13.png" alt="Image9" /></div>
                {/* IMAGE NR. 10 */}
                <div className="tp-caption  lfb ltb rs-parallaxlevel-2" data-x={120} data-y={600} data-speed={900} data-start={1600} data-easing="Power4.easeOut" style={{zIndex: 7}}><img src="images/swimwear/slides/s5.png" alt="Image10" /></div>
                {/* IMAGE NR. 11 */}
                <div className="tp-caption  lft ltt rs-parallaxlevel-2" data-x={900} data-y={-20} data-speed={900} data-start={1000} data-easing="Power4.easeOut" style={{zIndex: 7}}><img src="images/swimwear/slides/s10.png" alt="Image11" /></div>
                {/* IMAGE NR. 12 */}
                <div className="tp-caption  lft ltt rs-parallaxlevel-2" data-x={140} data-y={-20} data-speed={900} data-start={800} data-easing="Power4.easeOut" style={{zIndex: 7}}><img src="images/swimwear/slides/s3.png" alt="Image12" /></div>
                {/* IMAGE NR. 13 */}
                <div className="tp-caption  fadeIn fadeOut rs-parallaxlevel-2" data-x={480} data-y={500} data-speed={900} data-start={1800} data-easing="Power4.easeOut" style={{zIndex: 7}}><img src="images/swimwear/slides/s8.png" alt="Image13" /></div>
              </li>
            </ul>
          </div>
          <div className="scroll-to-content hidden-xs"> <a href="#" className="btn btn--round btn--round--lg"><span className="icon icon-arrow-down" /></a></div>
        </div>
      </section>
    );
};