

import Link from 'next/link';
import React, { useState } from 'react';

// import link from next


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
        <div className="language u-align-center u-hidden-sm u-hidden-xs u-list u-list-1" style={{ background: 'white' }}>
          <div className="u-repeater u-repeater-1">
            <div className="u-container-style u-custom-item u-list-item u-repeater-item u-white u-list-item-1" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction>
              <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-3">
                <p className="u-align-center u-custom-item u-text u-text-custom-color-2 u-text-default u-text-2"><span className="u-file-icon u-icon u-icon-3" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction><img src="images/197560.png" alt /></span>French
                </p>
              </div>
            </div>
            <div className="u-container-style u-custom-item u-list-item u-repeater-item" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction>
              <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-4">
                <p className="u-align-center u-custom-item u-text u-text-custom-color-2 u-text-default u-text-3"><span className="u-file-icon u-icon u-icon-4" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction><img src="images/323365.png" alt /></span>Spanish
                </p>
              </div>
            </div>
            <div className="u-container-style u-custom-item u-list-item u-repeater-item" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction>
              <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-5">
                <p className="u-align-center u-custom-item u-text u-text-custom-color-2 u-text-default u-text-4"><span className="u-file-icon u-icon u-icon-5" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction><img src="images/197626.png" alt /></span>Italian
                </p>
              </div>
            </div>
            <div className="u-container-style u-custom-item u-list-item u-repeater-item" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction>
              <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-6">
                <p className="u-align-center u-custom-item u-text u-text-custom-color-2 u-text-default u-text-5"><span className="u-file-icon u-icon u-icon-6" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction><img src="images/197571.png" alt /></span>German
                </p>
              </div>
            </div>
            <div className="u-container-style u-custom-item u-list-item u-repeater-item" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction>
              <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-7">
                <p className="u-align-center u-custom-item u-text u-text-custom-color-2 u-text-default u-text-6"><span className="u-file-icon u-icon u-icon-7" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction><img src="images/323300.png" alt /></span>Russian
                </p>
              </div>
            </div>
          </div>
        </div>

      )
    }
  }

  return (
    <header className="u-align-center u-clearfix u-header u-sticky u-sticky-b5c6 u-white" id="sec-19d4" style={{ height: '80px' }} data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction>
      <div className="u-clearfix u-sheet u-valign-middle-md u-valign-middle-xs u-sheet-1">
        <a href="" className="u-border-none u-btn u-button-style u-custom-color-1 u-hover-grey-90 u-btn-1">Free Consultation</a>
        <a href="" className="u-image u-logo u-image-1" data-image-width={252} data-image-height={44}>
          <img src="images/logo.svg" className="u-logo-image u-logo-image-1" />
        </a>
        <nav className="u-align-center u-dropdown-icon u-menu u-menu-dropdown u-nav-spacing-25 u-offcanvas u-offcanvas-shift u-menu-1" data-responsive-from="SM">
          <div className="menu-collapse" style={{ fontSize: '0.875rem', letterSpacing: 0 }}>
            <a className="u-button-style u-custom-active-border-color u-custom-active-color u-custom-border u-custom-border-color u-custom-borders u-custom-hover-border-color u-custom-hover-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link" href="#" style={{ padding: '1px 0px', fontSize: 'calc(1em + 2px)' }}>
              <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 302 302" style={{}}>
                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-7b92" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="svg-7b92" x="0px" y="0px" viewBox="0 0 302 302" style={{ enableBackground: 'new 0 0 302 302' }} xmlSpace="preserve" className="u-svg-content">
                <g>
                  <rect y={36} width={302} height={30} />
                  <rect y={236} width={302} height={30} />
                  <rect y={136} width={302} height={30} />
                </g>
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
              </svg>
            </a>
          </div>
          <div className="u-custom-menu u-nav-container">
            <ul className="u-custom-font u-nav u-spacing-5 u-text-font u-unstyled u-nav-1">
              <li className="u-nav-item">
                <Link href="/home">
                  <a className="u-border-active-custom-color-1 u-border-hover-custom-color-1 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-custom-color-1 u-text-custom-color-2 u-text-hover-grey-90" style={{ padding: 10 }}>
                    Home</a>
                </Link>
              </li>
              <li className="u-nav-item">
                <Link href="/hair">
                  <a className="u-border-active-custom-color-1 u-border-hover-custom-color-1 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-custom-color-1 u-text-custom-color-2 u-text-hover-grey-90" style={{ padding: 10 }}>
                    Hair
                  </a>
                </Link>
              </li>
              <li className="u-nav-item"><a className="u-border-active-custom-color-1 u-border-hover-custom-color-1 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-custom-color-1 u-text-custom-color-2 u-text-hover-grey-90" style={{ padding: 10 }}>Face</a>
                <div className="u-nav-popup" style={{ background: 'white' }}>
                  <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-2">
                    <li className="u-nav-item">

                      <Link href="/browlift">
                        <a className="u-button-style u-hover-custom-color-1 u-nav-link" >Brow Lift
                        </a>
                      </Link>
                    </li>
                    <li className="u-nav-item"><a className="u-button-style u-hover-custom-color-1 u-nav-link">Rhinoplasty</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="u-nav-item">
                <Link href="/breast">
                  <a className="u-border-active-custom-color-1 u-border-hover-custom-color-1 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-custom-color-1 u-text-custom-color-2 u-text-hover-grey-90" style={{ padding: 10 }}>
                    Breast
                  </a>
                </Link>
              </li>
              <li className="u-nav-item"><a className="u-border-active-custom-color-1 u-border-hover-custom-color-1 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-custom-color-1 u-text-custom-color-2 u-text-hover-grey-90" style={{ padding: 10 }}>Body</a>
              </li>
            </ul>
          </div>
          <div className="u-custom-menu u-nav-container-collapse">

            <div className="u-align-center u-container-style u-custom-color-1 u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
              <div className="u-inner-container-layout u-sidenav-overflow">
                <div className="u-menu-close" />
                <ul className="u-align-center u-custom-font u-heading-font u-nav u-popupmenu-items u-spacing-10 u-unstyled u-nav-3">
                  <li className="u-nav-item">
                    <a className="u-button-style u-nav-link" style={{ padding: '10px 0px' }}>
                      Home</a>
                  </li>
                  <li className="u-nav-item"><a className="u-button-style u-nav-link" style={{ padding: '10px 0px' }}>Hair</a>
                  </li>
                  <li className="u-nav-item"><a className="u-button-style u-nav-link" style={{ padding: '10px 0px' }}>Face</a>
                    <div className="u-nav-popup">
                      <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-4">
                        <li className="u-nav-item"><a className="u-button-style u-nav-link">Brow Lift</a>
                        </li>
                        <li className="u-nav-item"><a className="u-button-style u-nav-link">Rhinoplasty</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="u-nav-item"><a className="u-button-style u-nav-link" style={{ padding: '10px 0px' }}>Breast</a>
                  </li>
                  <li className="u-nav-item"><a className="u-button-style u-nav-link" style={{ padding: '10px 0px' }}>Body</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="u-menu-overlay u-opacity u-opacity-70 u-palette-5-dark-3" />
          </div>
        </nav>
        <div className="u-container-style u-group u-hidden-md u-hidden-sm u-hidden-xs u-shape-rectangle u-group-1">
          <div className="u-container-layout u-valign-middle-sm u-valign-middle-xs u-container-layout-1">
            <div className="u-align-center u-container-style u-group u-group-2">
              <div className="u-container-layout u-container-layout-2" tabIndex="0" onFocus={mouseEnter} onBlur={mouseLeave}>
                <p className="u-align-center u-text u-text-custom-color-2 u-text-default u-text-1"><span className="u-file-icon u-icon u-icon-1"><img src="images/323329.png" alt /></span>English
                </p><span className="u-align-right u-file-icon u-icon u-icon-2" data-href="#"><img src="images/892498.png" alt /></span>
              </div>
            </div>

            {getLanguageMenu()}

          </div>
        </div>
      </div>
      <style className="u-sticky-style" data-style-id="b5c6" dangerouslySetInnerHTML={{ __html: "\n      .u-sticky-fixed.u-sticky-b5c6:before,\n      .u-body.u-sticky-fixed .u-sticky-b5c6:before {\n        borders: top right bottom left !important\n      }\n    " }} />
    </header>



  )
}