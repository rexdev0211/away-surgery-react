import Link from 'next/link';
import Script from "next/script";

export default function Home() {

  return (
    <div className="custom-home">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2BLG34TBPY"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2BLG34TBPY');
        `}
      </Script>

      <Script id="the_talkto_id">
        {`
             var Tawk_API=Tawk_API||{ }, Tawk_LoadStart=new Date();
             (function(){
             var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
             s1.async=true;
             s1.src='https://embed.tawk.to/5f440bdacc6a6a5947ae6467/default';
             s1.charset='UTF-8';
             s1.setAttribute('crossorigin','*');
             s0.parentNode.insertBefore(s1,s0);
             })();
        `}
      </Script>
      <section className="u-clearfix u-hidden-lg u-hidden-xl u-section-1" id="sec-3214">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
            <div className="u-layout" style={{}}>
              <div className="u-layout-row" style={{}}>
                <div className="u-container-style u-layout-cell u-left-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-size-xs-60 u-white u-layout-cell-1" >
                  <div className="u-container-layout u-valign-middle-sm u-valign-middle-xs u-container-layout-1">
                    <h4 className="u-text u-text-custom-color-3 u-text-1"> Improving Your Looks, Changing Life</h4>
                    <h1 className="u-align-left u-text u-text-2"> cosmetic surgery experience that focuses on beauty, safety, and comfort</h1>
                    <a className="u-align-left u-border-none u-btn u-button-style u-hover-palette-2-dark-3 u-palette-1-base u-btn-1"> Book Online Consultation</a>
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-right-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-size-xs-60 u-layout-cell-2" >
                  <div className="u-container-layout u-container-layout-2" >
                    <img className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-hidden-md u-hidden-sm u-hidden-xs u-image u-image-contain u-image-1" src="images/img_52.png" data-image-width={919} data-image-height={864} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-clearfix u-expanded-width-md u-gutter-18 u-layout-wrap u-palette-1-base u-layout-wrap-2">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-style u-hidden-md u-hidden-sm u-hidden-xs u-layout-cell u-shape-rectangle u-size-15-lg u-size-16-xl u-size-19-md u-size-19-sm u-size-19-xs u-layout-cell-3">
                  <div className="u-container-layout u-valign-middle-lg u-container-layout-3">
                    <h3 className="u-align-center-sm u-align-center-xs u-align-left-md u-text u-text-3">
                      <span className="u-text-custom-color-3"> We are the leading</span>&nbsp;plastic surgery center in the Turkey
                    </h3>
                  </div>
                </div>
                <div className="u-container-style u-hidden-md u-hidden-sm u-hidden-xs u-layout-cell u-size-41-md u-size-41-sm u-size-41-xs u-size-44-xl u-size-45-lg u-layout-cell-4">
                  <div className="u-container-layout u-valign-middle-sm u-valign-middle-xs u-container-layout-4">
                    <img className="u-hidden-md u-hidden-sm u-hidden-xs u-image u-image-contain u-image-default u-preserve-proportions u-image-2" src="images/logo1.svg" data-image-width={3} data-image-height={240} />
                    <div className="u-align-center u-layout-grid u-list u-list-1">
                      <div className="u-repeater u-repeater-1">
                        <div className="u-align-center-sm u-align-center-xs u-container-style u-custom-item u-image u-image-contain u-list-item u-repeater-item u-image-3" data-image-width={348} data-image-height={386}>
                          <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-5" />
                        </div>
                        <div className="u-align-center-sm u-align-center-xs u-container-style u-custom-item u-image u-image-contain u-list-item u-repeater-item u-image-4" data-image-width={140} data-image-height={152}>
                          <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-6" />
                        </div>
                        <div className="u-align-center-sm u-align-center-xs u-container-style u-custom-item u-image u-image-contain u-list-item u-repeater-item u-image-5" data-image-width={280} data-image-height={304}>
                          <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-7" />
                        </div>
                        <div className="u-align-center-sm u-align-center-xs u-container-style u-custom-item u-image u-image-contain u-list-item u-repeater-item u-image-6" data-image-width={140} data-image-height={156}>
                          <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-8" />
                        </div>
                        <div className="u-align-center-sm u-align-center-xs u-container-style u-custom-item u-image u-image-contain u-list-item u-repeater-item u-image-7" data-image-width={140} data-image-height={166}>
                          <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-9" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="u-align-center-md u-align-center-sm u-align-center-xs u-expanded-width-sm u-expanded-width-xs u-hidden-lg u-hidden-xl u-image u-image-contain u-image-default u-image-8" src="images/new_img_15.png" data-image-width={1408} data-image-height={1452} />
        </div>
      </section>
      <section className="u-clearfix u-hidden-md u-hidden-sm u-hidden-xs u-section-2" id="sec-1b58">
        <div className="u-clearfix u-sheet u-valign-middle-xl u-sheet-1">
          <div data-interval={5000} data-u-ride="carousel" className="u-carousel u-expanded-width u-slider u-slider-1" id="carousel-6f90">
            <ol className="u-absolute-hcenter u-carousel-indicators u-hidden u-carousel-indicators-1">
              <li data-u-target="#carousel-6f90" className="u-active u-grey-30" data-u-slide-to={0} />
              <li data-u-target="#carousel-6f90" className="u-grey-30" data-u-slide-to={1} />
              <li data-u-target="#carousel-6f90" className="u-grey-30" data-u-slide-to={2} />
              <li data-u-target="#carousel-6f90" className="u-grey-30" data-u-slide-to={3} />
              <li data-u-target="#carousel-6f90" className="u-grey-30" data-u-slide-to={4} />
              <li data-u-target="#carousel-6f90" className="u-grey-30" data-u-slide-to={5} />
            </ol>
            <div className="u-carousel-inner" role="listbox">
              <div className="u-active u-carousel-item u-container-style u-slide">
                <div className="u-container-layout u-container-layout-1">
                  <div className="u-clearfix u-gutter-0 u-layout-wrap u-layout-wrap-1">
                    <div className="u-layout" style={{}}>
                      <div className="u-layout-row" style={{}}>
                        <div className="u-container-style u-layout-cell u-left-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-size-xs-60 u-white u-layout-cell-1" >
                          <div className="u-container-layout u-valign-middle-sm u-valign-middle-xs u-container-layout-2">
                            <h4 className="u-text u-text-custom-color-3 u-text-1"> Improving Your Looks, Changing Life</h4>
                            <h1 className="u-align-left u-text u-text-2"> cosmetic surgery experience that focuses on beauty, safety, and comfort</h1>
                            <a href="contact" className="u-align-left u-border-none u-btn u-button-style u-hover-palette-2-dark-3 u-palette-1-base u-btn-1"> Book Online Consultation</a>
                          </div>
                        </div>
                        <div className="u-container-style u-layout-cell u-right-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-size-xs-60 u-layout-cell-2" >
                          <div className="u-container-layout u-container-layout-3" >
                            <img className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-hidden-md u-hidden-sm u-hidden-xs u-image u-image-contain u-image-1" src="images/img_52.png" data-image-width={919} data-image-height={864} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-carousel-item u-container-style u-slide">
                <div className="u-container-layout u-container-layout-4">
                  <div className="u-clearfix u-gutter-0 u-layout-wrap u-layout-wrap-2">
                    <div className="u-layout" style={{}}>
                      <div className="u-layout-row" style={{}}>
                        <div className="u-container-style u-layout-cell u-left-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-size-xs-60 u-white u-layout-cell-3" >
                          <div className="u-container-layout u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-5">
                            <h4 className="u-text u-text-custom-color-3 u-text-3"> Winning is Only Important In War &amp; Surgery</h4>
                            <h1 className="u-align-left u-text u-text-4"> You deserve to have the perfect bikini Butt</h1>
                            <a href="contact" className="u-align-left u-border-none u-btn u-button-style u-hover-palette-2-dark-3 u-palette-1-base u-btn-2">Learn More</a>
                          </div>
                        </div>
                        <div className="u-container-style u-layout-cell u-right-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-size-xs-60 u-layout-cell-4" >
                          <div className="u-container-layout u-container-layout-6" >
                            <img className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-hidden-md u-hidden-sm u-hidden-xs u-image u-image-contain u-image-2" src="images/img_105.png" data-image-width={1544} data-image-height={1452} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-carousel-item u-container-style u-slide">
                <div className="u-container-layout u-valign-top u-container-layout-7">
                  <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-3">
                    <div className="u-layout" style={{}}>
                      <div className="u-layout-row" style={{}}>
                        <div className="u-container-style u-layout-cell u-left-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-size-xs-60 u-white u-layout-cell-5" >
                          <div className="u-container-layout u-valign-middle-sm u-valign-middle-xs u-container-layout-8">
                            <h4 className="u-text u-text-custom-color-3 u-text-5"> Not happy with your breasts?</h4>
                            <h1 className="u-align-left u-text u-text-6"> I Worry that Someday You Might Choose Breast Reduction Surgery </h1>
                            <a href="contact" className="u-align-left u-border-none u-btn u-button-style u-hover-palette-2-dark-3 u-palette-1-base u-btn-3">Learn More</a>
                          </div>
                        </div>
                        <div className="u-container-style u-layout-cell u-right-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-size-xs-60 u-layout-cell-6" >
                          <div className="u-container-layout u-container-layout-9" >
                            <img className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-hidden-md u-hidden-sm u-hidden-xs u-image u-image-contain u-image-3" src="images/img_106.png" data-image-width={1544} data-image-height={1452} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-carousel-item u-container-style u-slide">
                <div className="u-container-layout u-container-layout-10">
                  <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-4">
                    <div className="u-layout" style={{}}>
                      <div className="u-layout-row" style={{}}>
                        <div className="u-container-style u-layout-cell u-left-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-size-xs-60 u-white u-layout-cell-7" >
                          <div className="u-container-layout u-valign-middle-sm u-valign-middle-xs u-container-layout-11">
                            <h4 className="u-text u-text-custom-color-3 u-text-7"> Life is Good When Your Brows Are On Point</h4>
                            <h1 className="u-align-left u-text u-text-8"> Money can’t buy you happiness but it can pay for the plastic surgery </h1>
                            <a href="contact" className="u-align-left u-border-none u-btn u-button-style u-hover-palette-2-dark-3 u-palette-1-base u-btn-4">Learn More</a>
                          </div>
                        </div>
                        <div className="u-container-style u-layout-cell u-right-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-size-xs-60 u-layout-cell-8" >
                          <div className="u-container-layout u-container-layout-12" >
                            <img className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-hidden-md u-hidden-sm u-hidden-xs u-image u-image-contain u-image-4" src="images/img_107.png" data-image-width={1544} data-image-height={1452} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-carousel-item u-container-style u-slide">
                <div className="u-container-layout u-container-layout-13">
                  <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-5">
                    <div className="u-layout" style={{}}>
                      <div className="u-layout-row" style={{}}>
                        <div className="u-container-style u-layout-cell u-left-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-size-xs-60 u-white u-layout-cell-9" >
                          <div className="u-container-layout u-valign-middle-sm u-valign-middle-xs u-container-layout-14">
                            <h4 className="u-text u-text-custom-color-3 u-text-9"> Looking Beautiful isn’t Luck, It’s a Decision</h4>
                            <h1 className="u-align-left u-text u-text-10"> This Nose Job will change your life more beautiful and Colorfull </h1>
                            <a href="contact" className="u-align-left u-border-none u-btn u-button-style u-hover-palette-2-dark-3 u-palette-1-base u-btn-5">Learn More</a>
                          </div>
                        </div>
                        <div className="u-container-style u-layout-cell u-right-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-size-xs-60 u-layout-cell-10" >
                          <div className="u-container-layout u-container-layout-15" >
                            <img className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-hidden-md u-hidden-sm u-hidden-xs u-image u-image-contain u-image-5" src="images/img_108.png" data-image-width={1544} data-image-height={1452} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-carousel-item u-container-style u-slide">
                <div className="u-container-layout u-container-layout-16">
                  <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-6">
                    <div className="u-layout" style={{}}>
                      <div className="u-layout-row" style={{}}>
                        <div className="u-container-style u-layout-cell u-left-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-size-xs-60 u-white u-layout-cell-11" >
                          <div className="u-container-layout u-valign-middle-sm u-valign-middle-xs u-container-layout-17">
                            <h4 className="u-text u-text-custom-color-3 u-text-11"> Life isn’t Perfect, But Your Hair Can Be</h4>
                            <h1 className="u-align-left u-text u-text-12"> we can achieve undetectable natural looking results </h1>
                            <a href="contact" className="u-align-left u-border-none u-btn u-button-style u-hover-palette-2-dark-3 u-palette-1-base u-btn-6">Learn More</a>
                          </div>
                        </div>
                        <div className="u-container-style u-layout-cell u-right-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-size-xs-60 u-layout-cell-12" >
                          <div className="u-container-layout u-container-layout-18" >
                            <img className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-hidden-md u-hidden-sm u-hidden-xs u-image u-image-contain u-image-6" src="images/img_109.png" data-image-width={1544} data-image-height={1452} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="u-absolute-vcenter u-carousel-control u-carousel-control-prev u-hidden u-icon-circle u-text-palette-1-base u-carousel-control-1" href="#carousel-6f90" role="button" data-u-slide="prev">
              <span aria-hidden="true">
                <svg viewBox="0 0 477.175 477.175"><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z" /></svg>
              </span>
              <span className="sr-only">
                <svg viewBox="0 0 477.175 477.175"><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z" /></svg>
              </span>
            </a>
            <a className="u-absolute-vcenter u-carousel-control u-carousel-control-next u-hidden u-icon-circle u-text-palette-1-base u-carousel-control-2" href="#carousel-6f90" role="button" data-u-slide="next">
              <span aria-hidden="true">
                <svg viewBox="0 0 477.175 477.175"><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
		c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z" /></svg>
              </span>
              <span className="sr-only">
                <svg viewBox="0 0 477.175 477.175"><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
		c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z" /></svg>
              </span>
            </a>
          </div>
          <div className="u-clearfix u-gutter-18 u-layout-wrap u-palette-1-base u-layout-wrap-7">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-style u-hidden-md u-hidden-sm u-hidden-xs u-layout-cell u-shape-rectangle u-size-15-lg u-size-16-xl u-size-19-md u-size-19-sm u-size-19-xs u-layout-cell-13">
                  <div className="u-container-layout u-container-layout-19">
                    <h3 className="u-text u-text-13">
                      <span className="u-text-custom-color-3"> We are the leading</span>&nbsp;plastic surgery center in the Turkey
                    </h3>
                  </div>
                </div>
                <div className="u-container-style u-hidden-md u-hidden-sm u-hidden-xs u-layout-cell u-size-41-md u-size-41-sm u-size-41-xs u-size-44-xl u-size-45-lg u-layout-cell-14">
                  <div className="u-container-layout u-valign-middle-sm u-valign-middle-xs u-container-layout-20">
                    <img className="u-hidden-md u-hidden-sm u-hidden-xs u-image u-image-contain u-image-default u-preserve-proportions u-image-7" src="images/logo1.svg" data-image-width={3} data-image-height={240} />
                    <div className="u-align-center u-layout-grid u-list u-list-1">
                      <div className="u-repeater u-repeater-1">
                        <div className="u-align-center-sm u-align-center-xs u-container-style u-custom-item u-image u-image-contain u-list-item u-repeater-item u-image-8" data-image-width={348} data-image-height={386}>
                          <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-21" />
                        </div>
                        <div className="u-align-center-sm u-align-center-xs u-container-style u-custom-item u-image u-image-contain u-list-item u-repeater-item u-image-9" data-image-width={140} data-image-height={152}>
                          <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-22" />
                        </div>
                        <div className="u-align-center-sm u-align-center-xs u-container-style u-custom-item u-image u-image-contain u-list-item u-repeater-item u-image-10" data-image-width={280} data-image-height={304}>
                          <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-23" />
                        </div>
                        <div className="u-align-center-sm u-align-center-xs u-container-style u-custom-item u-image u-image-contain u-list-item u-repeater-item u-image-11" data-image-width={140} data-image-height={156}>
                          <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-24" />
                        </div>
                        <div className="u-align-center-sm u-align-center-xs u-container-style u-custom-item u-image u-image-contain u-list-item u-repeater-item u-image-12" data-image-width={140} data-image-height={166}>
                          <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-25" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-clearfix u-section-3" id="carousel_f4de">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs">
                  <div className="u-layout-col">
                    <div className="u-container-style u-layout-cell u-size-60 u-layout-cell-1">
                      <div className="u-container-layout u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-container-layout-1">
                        <img className="u-expanded-width-lg u-expanded-width-xl u-hidden-lg u-hidden-xl u-image u-image-contain u-image-default u-image-1" src="images/new_img_141.png" data-image-width={750} data-image-height={822} />
                        <img className="u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-hidden-md u-hidden-sm u-hidden-xs u-image u-image-contain u-image-2" src="images/img_16.png" data-image-width={844} data-image-height={1080} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs">
                  <div className="u-layout-col">
                    <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                      <div className="u-container-layout u-valign-bottom-md u-valign-bottom-sm u-valign-bottom-xs u-container-layout-2">
                        <h4 className="u-align-center-md u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-xl u-text u-text-custom-color-3 u-text-default u-text-1"> Why Clineca?</h4>
                        <h2 className="u-align-center-md u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-xl u-text u-text-2"> We’re not only cosmetic surgery but a complete experience.</h2>
                      </div>
                    </div>
                    <div className="u-align-center-md u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-size-30 u-layout-cell-3">
                      <div className="u-container-layout u-container-layout-3">
                        <div className="u-list u-list-1">
                          <div className="u-repeater u-repeater-1">
                            <div className="u-container-style u-list-item u-repeater-item">
                              <div className="u-container-layout u-similar-container u-container-layout-4">
                                <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-3" src="images/img_39.png" data-image-width={163} data-image-height={160} />
                                <h4 className="u-custom-item u-text u-text-3"> Fully Equipped Hospitals</h4>
                                <p className="u-custom-item u-text u-text-4"> Surgeries are performed in prestigious hospitals with intensive care units and doctors from all specialties to maximize the safety.</p>
                              </div>
                            </div>
                            <div className="u-container-style u-list-item u-repeater-item">
                              <div className="u-container-layout u-similar-container u-container-layout-5">
                                <img className="u-image u-image-default u-preserve-proportions u-image-4" src="images/img_36.png" data-image-width={163} data-image-height={160} />
                                <h4 className="u-custom-item u-text u-text-5"> Hotel and VIP Transfer&nbsp;</h4>
                                <p className="u-custom-item u-text u-text-6"> We provide airport transfer and transportation between your hotel and the hospital before and after the surgery, and special discounts in luxurious hotels near the hospital.</p>
                              </div>
                            </div>
                            <div className="u-container-style u-list-item u-repeater-item">
                              <div className="u-container-layout u-similar-container u-container-layout-6">
                                <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-5" src="images/img_42.png" data-image-width={166} data-image-height={160} />
                                <h4 className="u-custom-item u-text u-text-7"> No Hidden Costs<br />
                                </h4>
                                <p className="u-custom-item u-text u-text-8"> The price includes all costs related to the surgery. You’ll know what you will pay in advance. Plus, an online consultation with our surgeons is free of charge. </p>
                              </div>
                            </div>
                            <div className="u-container-style u-list-item u-repeater-item">
                              <div className="u-container-layout u-similar-container u-container-layout-7">
                                <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-6" src="images/img_44.png" data-image-width={167} data-image-height={160} />
                                <h4 className="u-custom-item u-text u-text-9"> Visits by Nurses </h4>
                                <p className="u-custom-item u-text u-text-10"> A nurse will visit you every day during your hotel resting to examine you and provide medical care.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-clearfix u-section-4" id="carousel_1bf5">
        <div className="u-clearfix u-sheet u-valign-middle-xs u-sheet-1">
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-align-center-xs u-container-style u-layout-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-1">
                  <div className="u-container-layout u-valign-middle u-container-layout-1">
                    <h4 className="u-align-center-sm u-align-left-lg u-align-left-md u-align-left-xl u-text u-text-custom-color-3 u-text-default-md u-text-default-sm u-text-default-xs u-text-1"> About Us</h4>
                    <h2 className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-text u-text-2"> Clineca is offering a complete cosmetic surgery experience focusing on beauty, safety and comfort.</h2>
                    <a href="contact" className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-border-none u-btn u-button-style u-hover-palette-1-dark-3 u-palette-1-base u-btn-1">Learn More&nbsp;<span style={{ fontWeight: 400 }} />
                    </a>
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-2">
                  <div className="u-container-layout u-container-layout-2">
                    <img className="u-hidden-sm u-hidden-xs u-image u-image-default u-preserve-proportions u-image-1" src="images/img_58.png" data-image-width={172} data-image-height={172} />
                    <img className="u-absolute-hcenter-lg u-absolute-hcenter-xl u-expanded-height-lg u-expanded-height-xl u-expanded-width-xs u-image u-image-contain u-image-2" src="images/img_59.png" data-image-width={605} data-image-height={600} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-clearfix u-section-5" id="sec-b495">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-clearfix u-expanded-width-lg u-expanded-width-sm u-expanded-width-xl u-expanded-width-xs u-gutter-20 u-layout-wrap u-layout-wrap-1">
            <div className="u-gutter-0 u-layout">
              <div className="u-layout-row">
                <div className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xl u-container-style u-layout-cell u-size-28-lg u-size-28-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-1">
                  <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-container-layout-1">
                    <div className="home-page-4-right-card u-align-center u-container-style u-group u-shape-rectangle u-group-1">
                      <div className="u-container-layout u-container-layout-2">
                        <div className="u-image u-image-circle u-image-contain u-preserve-proportions u-image-1" data-image-width={46} data-image-height={48} />
                        <h4 className="u-align-left u-text u-text-default-lg u-text-default-xl u-text-1"> Face Operation</h4>
                      </div>
                    </div>
                    <div className="u-list u-list-1">
                      <div className="u-repeater u-repeater-1">
                        <div className="u-align-left u-container-style u-custom-color-3 u-custom-item u-list-item u-repeater-item u-shape-rectangle u-list-item-1">
                          <div className="u-container-layout u-similar-container u-container-layout-3">
                            <p className="u-custom-item u-text u-text-2"> Hair Transplants</p>
                          </div>
                        </div>
                        <div className="u-align-left u-container-style u-custom-color-11 u-custom-item u-list-item u-repeater-item u-shape-rectangle u-list-item-2">
                          <div className="u-container-layout u-similar-container u-container-layout-4">
                            <p className="u-custom-item u-text u-text-3"> Rhinoplasty</p>
                          </div>
                        </div>
                        <div className="u-align-left u-container-style u-custom-color-3 u-custom-item u-list-item u-repeater-item u-shape-rectangle u-list-item-3">
                          <div className="u-container-layout u-similar-container u-container-layout-5">
                            <p className="u-custom-item u-text u-text-4"> Brow Lift</p>
                          </div>
                        </div>
                        <div className="u-align-left u-container-style u-custom-color-3 u-custom-item u-list-item u-repeater-item u-shape-rectangle u-list-item-4">
                          <div className="u-container-layout u-similar-container u-container-layout-6">
                            <p className="u-custom-item u-text u-text-5"> Chin Augmentation</p>
                          </div>
                        </div>
                        <div className="u-align-left u-container-style u-custom-color-3 u-custom-item u-list-item u-repeater-item u-shape-rectangle u-list-item-5">
                          <div className="u-container-layout u-similar-container u-container-layout-7">
                            <p className="u-custom-item u-text u-text-6"> Dimple Surgery</p>
                          </div>
                        </div>
                        <div className="u-align-left u-container-style u-custom-color-3 u-custom-item u-list-item u-repeater-item u-shape-rectangle u-list-item-6">
                          <div className="u-container-layout u-similar-container u-container-layout-8">
                            <p className="u-custom-item u-text u-text-7"> Eyelid Surgery</p>
                          </div>
                        </div>
                        <div className="u-align-left u-container-style u-custom-color-3 u-custom-item u-list-item u-repeater-item u-shape-rectangle u-list-item-7">
                          <div className="u-container-layout u-similar-container u-container-layout-9">
                            <p className="u-custom-item u-text u-text-8"> Ear Surgery</p>
                          </div>
                        </div>
                        <div className="u-align-left u-container-style u-custom-color-3 u-custom-item u-list-item u-repeater-item u-shape-rectangle u-list-item-8">
                          <div className="u-container-layout u-similar-container u-container-layout-10">
                            <p className="u-custom-item u-text u-text-9"> Facelift</p>
                          </div>
                        </div>
                        <div className="u-align-left u-container-style u-custom-color-3 u-custom-item u-list-item u-repeater-item u-shape-rectangle u-list-item-9">
                          <div className="u-container-layout u-similar-container u-container-layout-11">
                            <p className="u-custom-item u-text u-text-10"> Neck Lift</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="u-list u-list-2">
                      <div className="u-repeater u-repeater-2">
                        <div className="u-align-left u-container-style u-custom-color-2 u-custom-item u-list-item u-repeater-item u-shape-rectangle u-list-item-10">
                          <div className="u-container-layout u-similar-container u-container-layout-12">
                            <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-2" src="images/img_60.png" data-image-width={48} data-image-height={48} />
                            <h5 className="u-custom-item u-text u-text-11"> &nbsp; Breast Operation</h5>
                          </div>
                        </div>
                        <div className="u-align-left u-container-style u-custom-color-2 u-custom-item u-list-item u-repeater-item u-shape-rectangle u-list-item-11">
                          <div className="u-container-layout u-similar-container u-container-layout-13">
                            <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-3" src="images/img_61.svg" data-image-width={46} data-image-height={72} />
                            <h5 className="u-custom-item u-text u-text-white u-text-12">Body Operation</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-size-32-lg u-size-32-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-2">
                  <div className="u-container-layout u-valign-middle-lg u-container-layout-14">
                    <h4 className="u-align-left-xl u-text u-text-custom-color-3 u-text-default-lg u-text-default-md u-text-default-sm u-text-13"> Our Pantients Say</h4>
                    <h2 className="text-align-center u-align-left-xl u-text u-text-14"> Don’t just take our word for it but let’s listen to our patients.</h2>
                    <div data-interval={5000} data-u-ride="carousel" className="u-carousel u-expanded-width-sm u-expanded-width-xs u-slider u-slider-1" id="carousel-885a">
                      <ol className="u-absolute-hcenter u-carousel-indicators u-hidden u-carousel-indicators-1">
                        <li data-u-target="#carousel-885a" className="u-active u-grey-30" data-u-slide-to={0} />
                        <li data-u-target="#carousel-885a" className="u-grey-30" data-u-slide-to={1} />
                      </ol>
                      <div className="u-carousel-inner" role="listbox">
                        <div className="u-active u-carousel-item u-container-style u-slide">
                          <div className="u-container-layout u-container-layout-15">
                            <div className="u-align-center u-image u-image-circle u-preserve-proportions u-image-4" data-image-width={88} data-image-height={88} />
                            <h3 className="u-align-center u-text u-text-default u-text-15"> Chiara</h3>
                            <p className="u-align-center u-text u-text-custom-color-3 u-text-default u-text-16"> Rhinopasty</p>
                            <p className="u-align-left u-text u-text-custom-color-5 u-text-17"> “Oh, my God! I dont think I hava a whole new appearance. I’m like myself but with a nose where I can breathe through and with a nose I like”</p>
                          </div>
                        </div>
                        <div className="u-carousel-item u-container-style u-slide">
                          <div className="u-container-layout u-valign-bottom-xs u-container-layout-16">
                            <div className="u-align-center u-image u-image-circle u-preserve-proportions u-image-5" data-image-width={176} data-image-height={176} />
                            <h3 className="u-align-center-lg u-align-center-xl u-align-left-md u-align-left-sm u-align-left-xs u-text u-text-default-lg u-text-default-md u-text-default-sm u-text-default-xl u-text-18"> Gabriella Williams</h3>
                            <p className="u-align-center u-text u-text-custom-color-3 u-text-default u-text-19"> Brazilian Butt Lift</p>
                            <p className="u-align-left u-text u-text-custom-color-5 u-text-20"> As an anxious person, my biggest fear was to be left alone after the surgery. I read horrible reviews. So I’m aware of how lucky I was. From our first contact to the end of my recovery, they were always in touch, 7 days and 24 hours. Even after I returned home, they kept answering my questions, informing me, and following my recovery through my photos. </p>
                          </div>
                        </div>
                      </div>
                      <a className="u-carousel-control u-carousel-control-prev u-custom-color-3 u-spacing-8 u-text-body--color u-carousel-control-1" href="#carousel-885a" role="button" data-u-slide="prev">
                        <span aria-hidden="true">
                          <svg viewBox="0 0 477.175 477.175"><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z" /></svg>
                        </span>
                        <span className="sr-only">
                          <svg viewBox="0 0 477.175 477.175"><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z" /></svg>
                        </span>
                      </a>
                      <a className="u-carousel-control u-carousel-control-next u-custom-color-3 u-spacing-8 u-text-body--color u-carousel-control-2" href="#carousel-885a" role="button" data-u-slide="next">
                        <span aria-hidden="true">
                          <svg viewBox="0 0 477.175 477.175"><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
		c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z" /></svg>
                        </span>
                        <span className="sr-only">
                          <svg viewBox="0 0 477.175 477.175"><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
		c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z" /></svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-align-left u-clearfix u-section-6" id="sec-66dd">
        <div className="u-clearfix u-sheet u-sheet-1">
          <img className="u-hidden-md u-hidden-sm u-hidden-xs u-image u-image-contain u-image-default u-image-1" src="images/img_31.svg" data-image-width={127} data-image-height={349} />
          <div className="u-expanded-width-lg u-expanded-width-md u-expanded-width-xl u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              <div className="u-container-style u-custom-item u-image u-image-contain u-list-item u-repeater-item u-image-2" data-image-width={266} data-image-height={76}>
                <div className="u-container-layout u-similar-container u-container-layout-1" />
              </div>
              <div className="u-container-style u-custom-item u-image u-image-contain u-list-item u-repeater-item u-image-3" data-image-width={266} data-image-height={132}>
                <div className="u-container-layout u-similar-container u-container-layout-2" />
              </div>
              <div className="u-container-style u-custom-item u-image u-image-contain u-list-item u-repeater-item u-image-4" data-image-width={250} data-image-height={93}>
                <div className="u-container-layout u-similar-container u-container-layout-3" />
              </div>
              <div className="u-container-style u-custom-item u-image u-image-contain u-list-item u-repeater-item u-image-5" data-image-width={200} data-image-height={131}>
                <div className="u-container-layout u-similar-container u-container-layout-4" />
              </div>
            </div>
          </div>
          <div className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-list u-list-2">
            <div className="u-repeater u-repeater-2">
              <div className="u-container-style u-custom-item u-image u-image-contain u-list-item u-repeater-item u-image-6" data-image-width={267} data-image-height={103}>
                <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-5" />
              </div>
              <div className="u-container-style u-custom-item u-image u-image-contain u-list-item u-repeater-item u-image-7" data-image-width={269} data-image-height={100}>
                <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-6" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-clearfix u-custom-color-2 u-section-7" id="sec-3324">
        <div className="u-clearfix u-sheet u-valign-bottom-xl u-valign-bottom-xs u-valign-middle-lg u-sheet-1">
          <img className="u-hidden-sm u-hidden-xs u-image u-image-default u-image-1" src="images/new_image_10.png" data-image-width={344} data-image-height={345} />
          <div className="u-clearfix u-expanded-width u-gutter-22 u-layout-wrap u-layout-wrap-1">
            <div className="u-gutter-0 u-layout">
              <div className="u-layout-row">
                <div className="u-align-left u-container-style u-layout-cell u-shape-rectangle u-size-30-lg u-size-30-xl u-size-31-md u-size-31-sm u-size-31-xs u-layout-cell-1">
                  <div className="u-container-layout u-container-layout-1">
                    <img className="u-absolute-hcenter-xs u-align-center-xs u-expanded-height-sm u-expanded-height-xs u-hidden-lg u-hidden-md u-hidden-xl u-image u-image-default u-image-2" src="images/new_img_9.png" data-image-width={534} data-image-height={1139} />
                    <img className="u-expanded-height-md u-expanded-height-sm u-expanded-height-xs u-hidden-sm u-hidden-xs u-image u-image-default u-image-3" src="images/new_img_9.png" data-image-width={534} data-image-height={1139} />
                    <img className="u-absolute-hcenter-sm u-align-center-sm u-align-center-xs u-expanded-height-sm u-expanded-width-xs u-image u-image-4" src="images/new_img_8.png" data-image-width={812} data-image-height={1012} />
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-size-29-md u-size-29-sm u-size-29-xs u-size-30-lg u-size-30-xl u-layout-cell-2">
                  <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-valign-middle-xs u-container-layout-2">
                    <h4 className="u-align-left u-text u-text-custom-color-3 u-text-1"> Clineca Consultaion</h4>
                    <h2 className="u-align-left u-text u-text-2"> We’re open and welcoming  patients! Let us make an appointment for your online consultation.</h2>
                    <a href="contact" className="u-align-left u-border-none u-btn u-button-style u-hover-palette-1-dark-3 u-white u-btn-1"> Book Online Consultation</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}