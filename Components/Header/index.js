import { useState } from "react";
import Head from 'next/head';
import Script from 'next/script'

export const Header = () => {


  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const mouseEnter = () => {
    setShowLanguageMenu(true);
  }
  const mouseLeave = () => {
    setShowLanguageMenu(false);

  }

  const getLanguageMenu = () => {
    if (showLanguageMenu) {
      return (
        <div className="custom_box_shadow u-hidden-md u-hidden-sm u-hidden-xs u-list u-list-1" style={{ background: 'white' }}>
          <div className="u-repeater u-repeater-1">
            <div className="u-container-style u-custom-item u-list-item u-repeater-item" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction>
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-2">
                <p className="u-align-center u-custom-item u-text u-text-default u-text-2"><span className="u-file-icon u-icon u-icon-4" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction><img src="images/197560.png" /></span>French
                </p>
              </div>
            </div>
            <div className="u-container-style u-custom-item u-list-item u-repeater-item" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction>
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
                <p className="u-align-center u-custom-item u-text u-text-default u-text-3"><span className="u-file-icon u-icon u-icon-4" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction><img src="images/spanish_flag.png" /></span>Spanish
                </p>
              </div>
            </div>
            <div className="u-container-style u-custom-item u-list-item u-repeater-item" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction>
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-4">
                <p className="u-align-center u-custom-item u-text u-text-default u-text-4"><span className="u-file-icon u-icon u-icon-4" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction><img src="images/197626.png" /></span>Italian
                </p>
              </div>
            </div>
            <div className="u-container-style u-custom-item u-list-item u-repeater-item" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction>
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-5">
                <p className="u-align-center u-custom-item u-text u-text-default u-text-5"><span className="u-file-icon u-icon u-icon-7" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction><img src="images/197571.png" /></span>German
                </p>
              </div>
            </div>
            <div className="u-container-style u-custom-item u-list-item u-repeater-item" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction>
              <div className="u-container-layout u-similar-container u-valign-top u-container-layout-6">
                <p className="u-align-center u-custom-item u-text u-text-default u-text-6"><span className="u-file-icon u-icon u-icon-8" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction><img src="images/323300.png" /></span>Russian
                </p>
              </div>
            </div>
          </div>
        </div>

      )
    }
  }

  return (
    <header className="custom_box_shadow u-align-left-md u-align-left-sm u-align-left-xs u-clearfix u-header u-sticky u-sticky-6561 u-white u-header" id="sec-acc2">
      <div className="u-clearfix u-sheet u-sheet-1">
        <a href="contact" className="u-btn u-button-style u-hidden-md u-hidden-sm u-hidden-xs u-hover-palette-1-dark-1 u-palette-1-base u-btn-1">FREE
          CONSULTATION
        </a>


        <a className="u-hidden-sm u-hidden-xs u-image u-logo u-image-1" data-image-width={252} data-image-height={44}>
          <img src="images/logo.svg" className="u-logo-image u-logo-image-1" />
        </a>
        <nav className="u-dropdown-icon u-menu u-menu-dropdown u-offcanvas u-menu-1" data-responsive-from="MD">
          <div className="menu-collapse" style={{ fontSize: '0.875rem', letterSpacing: 0 }}>
            <a className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" style={{ color: 'rgb(26, 74, 103) !important' }}>
              <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 46 38" style={{}}>
                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-5d3e" />
              </svg>
              <svg className="u-svg-content" viewBox="0 0 46 38" id="svg-5d3e">
                <rect x={8} y={8} width={30} height={4} fill="currentColor" />
                <rect x={14} y={17} width={24} height={4} fill="currentColor" />
                <rect x={20} y={26} width={18} height={4} fill="currentColor" />
              </svg>
            </a>
          </div>
          <div className="u-custom-menu u-nav-container">
            <ul className="u-nav u-spacing-0 u-unstyled u-nav-1">

              <li className="u-nav-item">
                <a href="home" className="u-button-style u-nav-link u-text-active-custom-color-12 u-text-custom-color-5 u-text-hover-custom-color-4" style={{ padding: 10 }}>Home</a>
              </li>
              <li className="u-nav-item">
                <a href="hair" className="u-button-style u-nav-link u-text-active-custom-color-12 u-text-custom-color-5 u-text-hover-custom-color-4" style={{ padding: 10 }}>Hair</a>
              </li>
              <li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-custom-color-12 u-text-custom-color-5 u-text-hover-custom-color-4" style={{ padding: 10 }}>Face</a>
                <div className="u-nav-popup" style={{ background: 'white' }}>
                  <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-11 u-nav-2">
                    <li className="u-nav-item">
                      <a href="browlift" className="u-button-style u-nav-link u-text-custom-color-5 u-text-hover-palette-1-light-3">Brow
                        Lift
                      </a>
                    </li>
                    <li className="u-nav-item">
                      <a href="rhinoplasty" className="u-button-style u-nav-link u-text-custom-color-5 u-text-hover-palette-1-light-3">Rhinoplasty</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="u-nav-item">
                <a href="breast" className="u-button-style u-nav-link u-text-active-custom-color-12 u-text-custom-color-5 u-text-hover-custom-color-4" style={{ padding: 10 }}>Breast</a>
              </li>
              <li className="u-nav-item">
                <a href="buttlift" className="u-button-style u-nav-link u-text-active-custom-color-12 u-text-custom-color-5 u-text-hover-custom-color-4" style={{ padding: 10 }}>Body</a>
              </li>
              {/* <li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-custom-color-12 u-text-custom-color-5 u-text-hover-custom-color-4" style={{ padding: 10 }}>English</a>
                <div className="u-nav-popup">
                  <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-11 u-nav-3">
                    <li className="u-nav-item"><a className="u-button-style u-nav-link u-text-custom-color-5 u-text-hover-palette-1-light-3">Russian</a>
                    </li>
                    <li className="u-nav-item"><a className="u-button-style u-nav-link u-text-custom-color-5 u-text-hover-palette-1-light-3">German</a>
                    </li>
                    <li className="u-nav-item"><a className="u-button-style u-nav-link u-text-custom-color-5 u-text-hover-palette-1-light-3">Italian</a>
                    </li>
                    <li className="u-nav-item"><a className="u-button-style u-nav-link u-text-custom-color-5 u-text-hover-palette-1-light-3">Spanish</a>
                    </li>
                    <li className="u-nav-item"><a className="u-button-style u-nav-link u-text-custom-color-5 u-text-hover-palette-1-light-3">French</a>
                    </li>
                  </ul>
                </div>
              </li> */}
            </ul>
          </div>
          <div className="u-custom-menu u-nav-container-collapse">
            <div className="u-container-style u-custom-color-2 u-inner-container-layout u-sidenav u-sidenav-1" data-offcanvas-width="302.25">
              <div className="u-inner-container-layout u-sidenav-overflow">
                <div className="u-menu-close u-menu-close-1" /><span className="u-icon u-icon-rectangle u-icon-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 40 40" style={{}}>
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-9128" />
                </svg><svg className="u-svg-content" viewBox="0 0 40 40" id="svg-9128">
                    <path d="M5.29456 24.1534L11.5694 25.1067L25.3887 11.9413L18.6783 25.9446L34.377 28.5661C34.6444 28.6068 34.9176 28.5825 35.1736 28.4952C35.4296 28.408 35.6608 28.2604 35.8478 28.065C36.0347 27.8695 36.1718 27.632 36.2475 27.3723C36.3231 27.1127 36.3352 26.8387 36.2826 26.5734L31.371 1.73535C31.3135 1.44805 31.1821 1.18069 30.9898 0.959581C30.7976 0.738471 30.551 0.571228 30.2745 0.474309C29.998 0.377391 29.701 0.354137 29.4127 0.406836C29.1245 0.459536 28.8549 0.586373 28.6306 0.774865L4.45968 21.2003C4.21341 21.4097 4.03248 21.6855 3.93841 21.9948C3.84434 22.3041 3.84108 22.6338 3.92902 22.9449C4.01696 23.256 4.19241 23.5352 4.43448 23.7495C4.67656 23.9637 4.97509 24.1039 5.29456 24.1534ZM18.0398 36.5773L24.8006 30.7276L16.0591 29.1851L18.0398 36.5773Z" fill="currentColor" />
                  </svg></span>
                <ul className="u-align-center-lg u-align-center-xl u-align-left-md u-align-left-sm u-align-left-xs u-nav u-popupmenu-items u-spacing-10 u-unstyled u-nav-4">

                  <li className="u-nav-item">
                    <a href="home" className="u-button-style u-nav-link" style={{ padding: '10px 13px' }}>Home</a>
                  </li>
                  <li className="u-nav-item">
                    <a href="hair" className="u-button-style u-nav-link" style={{ padding: '10px 13px' }}>Hair</a>
                  </li>
                  <li className="u-nav-item"><a className="u-button-style u-nav-link" style={{ padding: '10px 13px' }}>Face</a>
                    <div className="u-nav-popup">
                      <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-11 u-nav-5">
                        <li className="u-nav-item">
                          <a href="browlift" className="u-button-style u-nav-link">Brow Lift</a>
                        </li>
                        <li className="u-nav-item">
                          <a href="rhinoplasty" className="u-button-style u-nav-link">Rhinoplasty</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="u-nav-item">
                    <a href="breast" className="u-button-style u-nav-link" style={{ padding: '10px 13px' }}>Breast</a>
                  </li>
                  <li className="u-nav-item">
                    <a href="buttlift" className="u-button-style u-nav-link" style={{ padding: '10px 13px' }}>Body</a>
                  </li>
                  <li className="u-nav-item"><a className="u-button-style u-nav-link" style={{ padding: '10px 13px' }}>English</a>
                    <div className="u-nav-popup">
                      <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-11 u-nav-6">
                        <li className="u-nav-item"><a className="u-button-style u-nav-link">Russian</a>
                        </li>
                        <li className="u-nav-item"><a className="u-button-style u-nav-link">German</a>
                        </li>
                        <li className="u-nav-item"><a className="u-button-style u-nav-link">Italian</a>
                        </li>
                        <li className="u-nav-item"><a className="u-button-style u-nav-link">Spanish</a>
                        </li>
                        <li className="u-nav-item"><a className="u-button-style u-nav-link">French</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <a href="contact" style={{ fontSize: '0.875rem', position: 'absolute !important', bottom: '0 !important', left: 0, margin: '0 !important' }} className="position_absolute u-align-left-sm u-align-left-xs u-border-none u-btn u-button-style u-hover-black u-text-hover-white u-text-palette-1-base u-white u-btn-2">Consultation<span />
                </a>
              </div>
            </div>
            <div className="u-custom-color-4 u-menu-overlay u-opacity u-opacity-65" />
          </div>
        </nav>
        <div className="u-container-style u-group u-hidden-md u-hidden-sm u-hidden-xs u-group-1">
          <div className="u-container-layout" tabIndex="0" onFocus={mouseEnter} onBlur={mouseLeave}>
            <p className="u-align-center u-custom-item u-text u-text-1"><span className="u-file-icon u-icon u-icon-2" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction><img src="images/323329.png" /></span>English
            </p><span className="u-file-icon u-icon u-icon-3"><img src="images/892498.png" /></span>
          </div>
        </div>

        {getLanguageMenu()}

        <a className="u-hidden-lg u-hidden-md u-hidden-xl u-image u-logo u-image-2" data-image-width={40} data-image-height={40}>
          <img src="images/logo_small.svg" className="u-logo-image u-logo-image-2" />
        </a>
      </div>
    </header>

  )
}
