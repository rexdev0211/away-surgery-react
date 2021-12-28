import Script from 'next/script'
export const ContactUs = () => {
  return (
    <div className="contact">
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

      <section className="u-align-center-md u-align-center-sm u-align-center-xs u-clearfix u-section-1" id="sec-6721">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-clearfix u-expanded-width-lg u-expanded-width-xl u-gutter-0 u-layout-wrap u-layout-wrap-1">
            <div className="u-layout" style={{}}>
              <div className="u-layout-row" style={{}}>
                <div className="u-align-center u-container-style u-hidden-md u-hidden-sm u-hidden-xs u-image u-image-contain u-layout-cell u-left-cell u-size-25-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-size-xs-60 u-image-1" data-image-width={686} data-image-height={1080}>
                  <div className="u-container-layout u-valign-middle u-container-layout-1" />
                </div>
                <div className="u-align-left u-container-style u-custom-color-2 u-layout-cell u-right-cell u-size-30-xl u-size-35-lg u-size-60-md u-size-60-sm u-size-60-xs u-size-xs-60 u-layout-cell-2" >
                  <div className="u-container-layout u-valign-top-xs u-container-layout-2">
                    <h2 className="u-text u-text-1"> Free Online Consultation</h2>
                    <div id="question_iframe" data-tf-widget="DTgEb8fb" data-tf-iframe-props="title=Contact Form (copy)" style={{ background: '#fff', height: 400 }} />
                    <Script src="//embed.typeform.com/next/embed.js"></Script>

                    <p className="u-text u-text-default-lg u-text-2"> Feel free to ask all about surgery and we will be happy to
                      help you. </p>
                    <div className="u-form u-form-1">
                      <form action="#" method="POST" className="u-clearfix u-form-spacing-14 u-form-vertical u-inner-form" source="custom" name="form" style={{ padding: 10 }}>
                        <div className="u-form-group u-form-name">
                          <label htmlFor="name-8e75" className="u-custom-font u-label u-label-1">What is your name ?</label>
                          <input type="text" placeholder="Your Full Name" id="name-8e75" name="name" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-input-1" required />
                        </div>
                        <div className="u-form-email u-form-group">
                          <label htmlFor="email-8e75" className="u-custom-font u-label u-label-2">What is your email?</label>
                          <input type="email" placeholder="Your Email Address" id="email-8e75" name="email" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-input-2" required />
                        </div>
                        <div className="u-form-group u-form-phone u-form-group-3">
                          <label htmlFor="phone-ccf7" className="u-custom-font u-label u-label-3">What is your phone number?</label>
                          <input type="tel" placeholder="Your Phone Number" id="phone-ccf7" name="phone" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-input-3" required />
                        </div>
                        <div className="u-form-group u-form-message">
                          <label htmlFor="message-8e75" className="u-custom-font u-label u-label-4">Do you have any message for
                            us?</label>
                          <textarea placeholder="Write Your Message ..." rows={4} cols={50} id="message-8e75" name="message" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-input-4" required defaultValue={""} />
                        </div>
                        <div className="u-align-center-xs u-align-right-lg u-align-right-md u-align-right-sm u-align-right-xl u-form-group u-form-submit">
                          <a href="#" className="u-border-none u-btn u-btn-submit u-button-style u-hover-white u-text-custom-color-12 u-btn-1">Send
                            Message</a>
                          <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
                        </div>
                        <div className="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                        <div className="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors
                          then try again. </div>
                        <input type="hidden" defaultValue name="recaptchaResponse" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-align-left-md u-align-left-sm u-align-left-xs u-container-style u-custom-color-3 u-group u-shape-rectangle u-group-1">
            <div className="u-container-layout u-valign-middle u-container-layout-3">
              <h2 className="u-text u-text-default-xl u-text-3"> need quick answer?</h2>
              <p className="u-text u-text-default-lg u-text-default-md u-text-default-xl u-text-4"> We serve 24 hours in 7 days.
                still contact us now on whatsapp </p>
              <a href="https://wa.me/447542377550?text=Hello%2C+Can+I+book+a+free+consultation%21" className="u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-2"><span className="u-icon u-icon-1"><svg className="u-svg-content" viewBox="0 0 20 20" style={{ width: '1em', height: '1em' }}>
                <path d="M12.7266 11.0084C13.1772 11.1501 13.609 11.346 14.0125 11.5917L13.9866 11.5767C14.4275 11.7725 14.8083 12.0017 15.1558 12.2709L15.1433 12.2617C15.16 12.3125 15.17 12.37 15.17 12.4309L15.1691 12.4575V12.4567C15.1566 12.8142 15.0775 13.15 14.9433 13.4559L14.95 13.4384C14.7575 13.8242 14.4366 14.1217 14.0441 14.28L14.0325 14.2842C13.6263 14.4965 13.1772 14.6136 12.7191 14.6267H12.7141C11.8398 14.5143 10.9947 14.2365 10.2241 13.8084L10.26 13.8267C9.44147 13.4559 8.69715 12.9394 8.06331 12.3025L8.06248 12.3017C7.37113 11.5819 6.74429 10.8028 6.18915 9.97336L6.14998 9.91169C5.59909 9.19158 5.27948 8.32136 5.23332 7.41587L5.23248 7.40503V7.3017C5.24471 6.91491 5.33554 6.53465 5.49943 6.18408C5.66333 5.83351 5.89686 5.51996 6.18582 5.26254L6.18832 5.26004C6.36681 5.0822 6.60722 4.98036 6.85915 4.97588H6.85998C6.94415 4.97838 7.02498 4.98504 7.10331 4.99671L7.09248 4.99504C7.16498 5.00588 7.24915 5.01254 7.33581 5.01421H7.33831C7.45964 5.00241 7.58135 5.0324 7.68331 5.09921L7.68164 5.09838C7.77081 5.19671 7.83914 5.31587 7.87998 5.44671L7.88164 5.45337C7.95053 5.6256 8.09275 6.00448 8.30831 6.59004C8.42081 6.8517 8.53081 7.1742 8.61914 7.50587L8.63081 7.55837C8.57071 7.8484 8.41415 8.10953 8.18664 8.2992L8.18414 8.30087C7.88692 8.61531 7.73831 8.81531 7.73831 8.90086C7.74149 8.97102 7.76494 9.03875 7.80581 9.09586L7.80498 9.09503C8.12728 9.76132 8.57291 10.3605 9.11831 10.8609L9.12247 10.865C9.69343 11.3794 10.3335 11.8113 11.0241 12.1484L11.0733 12.17C11.1577 12.2248 11.2552 12.2562 11.3558 12.2609H11.3575C11.4869 12.2609 11.7197 12.052 12.0558 11.6342C12.3919 11.2164 12.6152 11.0075 12.7258 11.0075L12.7266 11.0084ZM10.1041 17.855H10.1225C11.2167 17.8566 12.2992 17.6298 13.3008 17.1892L13.25 17.2092C15.2133 16.3808 16.7441 14.85 17.5524 12.9392L17.5724 12.8867C17.9808 11.9592 18.2183 10.8775 18.2183 9.74086C18.2183 8.6042 17.9808 7.52253 17.5524 6.54337L17.5724 6.59504C16.7441 4.63171 15.2133 3.10088 13.3025 2.29255L13.25 2.27255C12.3225 1.86422 11.2408 1.62672 10.1041 1.62672C8.96747 1.62672 7.88581 1.86422 6.90665 2.29255L6.95831 2.27255C4.99499 3.10088 3.46416 4.63171 2.65583 6.54254L2.63583 6.59504C2.20616 7.59148 1.98632 8.66574 1.98999 9.75086C1.9873 11.4665 2.53625 13.1376 3.55582 14.5175L3.53999 14.4958L2.51916 17.5067L5.64582 16.5117C6.95196 17.3914 8.49186 17.8593 10.0666 17.855H10.1058H10.1041ZM10.1041 5.66124e-05H10.1316C11.4883 5.66124e-05 12.7783 0.285056 13.9441 0.799221L13.8833 0.775054C16.2375 1.77255 18.0733 3.60838 19.0466 5.89921L19.0708 5.96254C19.5608 7.0767 19.8458 8.37587 19.8458 9.74169C19.8458 11.1075 19.5608 12.4067 19.0466 13.5825L19.0708 13.5209C18.0733 15.875 16.2375 17.7108 13.9466 18.6842L13.8833 18.7083C12.7775 19.1983 11.4875 19.4833 10.1308 19.4833H10.1025H10.1041H10.06C8.34414 19.4833 6.73331 19.0325 5.33998 18.2433L5.38748 18.2683L0 20L1.75749 14.7675C0.840091 13.2584 0.357342 11.5253 0.362499 9.7592C0.362499 8.38753 0.647498 7.08254 1.16166 5.90004L1.1375 5.96254C2.13499 3.60838 3.97082 1.77255 6.26165 0.799221L6.32498 0.775054C7.50859 0.259471 8.78645 -0.00444421 10.0775 5.66124e-05H10.105H10.1033H10.1041Z" fill="currentColor" />
              </svg><img /></span>&nbsp;<span style={{ fontSize: '0.875rem' }}> Send Message Whatsapp&nbsp;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>


  )
}
