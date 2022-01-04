import { Carousel } from "react-responsive-carousel"

export const Caresol = ({ children }) => {
  return (
    <div className="my_caresoll" >

      {/* onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb} */}

      <div className="u-clearfix caresol-section" id="carousel_2c60">
        <div className="u-clearfix u-sheet ">

          <div data-interval={2000} data-u-ride="carousel" className="br-section5-3grid u-align-center u-carousel u-slider u-slider-1" id="carousel-b57a">
            <ol className="u-absolute-hcenter u-carousel-indicators u-hidden u-carousel-indicators-1">
              <li data-u-target="#carousel-1143" className="u-active u-grey-30 u-shape-circle" data-u-slide-to={0} style={{ width: 10, height: 10 }} />
              <li data-u-target="#carousel-1143" className="u-grey-30 u-shape-circle" data-u-slide-to={1} style={{ width: 10, height: 10 }} />
            </ol>
            {children}
            {/* <div className="u-carousel-inner" role="listbox" >
              <div className="u-active u-align-center u-carousel-item u-container-style u-slide u-carousel-item-1">
                <div style={{ display: "flex", flexDirection: 'column', padding: '15px' }}>
                  <div style={{ display: "flex", flexDirection: 'row' }}>
                    <img style={{ padding: '5px' }} src="images/img_102.png" ="caresol-logo" width="80" height="80" />
                    <div style={{ display: "flex", flexDirection: 'column', alignItems: "flex-start", marginLeft: '20px', marginTop: '10px' }}>
                      <h4 style={{ margin: '0', color: '#1A4A67', textAlign: 'left' }}>Gabriella Williams</h4>
                      <p style={{ margin: '0', color: '#FF5F7E', textAlign: 'left' }}> Brazilian Butt Lift</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ textAlign: 'left', color: '#555555', font: '14px' }}>As an anxious person, my biggest fear was to be left alone after the
                      surgery. I read horrible reviews. So I’m aware of how lucky I was. From our first contact to the end
                      of my recovery, they were always in touch, 7 days and 24 hours. Even after I returned home, they
                      kept answering my questions, informing me, and following my recovery through my photos.</p>
                  </div>
                </div>
              </div>
              <div className="u-align-center u-carousel-item u-container-style u-slide u-carousel-item-2">
                <div style={{ display: "flex", flexDirection: 'column', padding: '15px' }}>
                  <div style={{ display: "flex", flexDirection: 'row' }}>
                    <img style={{ padding: '5px' }} src="images/img_18.png" ="caresol-logo" width="80" height="80" />
                    <div style={{ display: "flex", flexDirection: 'column', alignItems: "flex-start", marginLeft: '20px', marginTop: '10px' }}>
                      <h4 style={{ margin: '0', color: '#1A4A67', textAlign: 'left' }}>Chiara</h4>
                      <p style={{ margin: '0', color: '#FF5F7E', textAlign: 'left' }}> Rhinopasty</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ textAlign: 'left', color: '#555555', font: '14px' }}>“Oh, my God! I dont think I hava a whole new appearance. I’m like myself but with a nose where I can breathe through and with a nose I like”</p>
                  </div>
                </div>
              </div>
            </div> */}

            <a className="u-border-2 u-border-custom-color-3 u-carousel-control u-carousel-control-prev u-custom-color-3 u-icon-rounded u-spacing-8 u-text-hover-white u-carousel-control-1" href="#carousel-b57a" role="button" data-u-slide="prev">
              <span aria-hidden="true">
                <svg viewBox="0 0 477.175 477.175">
                  <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z" />
                </svg>
              </span>
              <span className="sr-only">
                <svg viewBox="0 0 477.175 477.175">
                  <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z" />
                </svg>
              </span>
            </a>
            <a className="u-border-2 u-border-custom-color-3 u-carousel-control u-carousel-control-next u-custom-color-3 u-icon-rounded u-spacing-8 u-text-hover-white u-carousel-control-2" href="#carousel-b57a" role="button" data-u-slide="next">
              <span aria-hidden="true">
                <svg viewBox="0 0 477.175 477.175">
                  <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
		c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z">
                  </path>
                </svg>
              </span>
              <span className="sr-only">
                <svg viewBox="0 0 477.175 477.175">
                  <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
		c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z">
                  </path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

    </div>


  )
}

{/* <div className="u-active u-align-center u-carousel-item u-container-style u-slide u-carousel-item-1">
<div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-container-layout-1">
  <div className="u-container-style u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-group u-group-1">
    <div className="u-container-layout u-valign-middle-lg u-container-layout-2">
      <div className="u-align-center-md u-align-center-sm u-align-center-xs u-image u-image-circle u-preserve-proportions u-image-1"  data-image-width={176} data-image-height={176}
        style={{
          backgroundImage: "url('images/img_102.png')",
          width: '88px',
          height: '88px',
          margin: '10px',
        }} />
      <h3 className="u-align-center-md u-align-center-xs u-align-left-lg u-align-left-xl u-text u-text-default-lg u-text-default-md u-text-default-sm u-text-default-xl "
        style={{ whiteSpace: 'nowrap', margin: '0 !important' }}>
        Gabriella Williams </h3>
      <p className="u-align-center-md u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-xl u-text u-text-custom-color-3 u-text-default "
        style={{
          whiteSpace: 'nowrap', fontSize: '14px', margin: '0px'
        }}>
        Brazilian Butt Lift</p>
      <p className="u-text u-text-3"> As an anxious person, my biggest fear was to be left alone after the
        surgery. I read horrible reviews. So I’m aware of how lucky I was. From our first contact to the end
        of my recovery, they were always in touch, 7 days and 24 hours. Even after I returned home, they
        kept answering my questions, informing me, and following my recovery through my photos.</p>
    </div>
  </div>
</div>
</div> */}

