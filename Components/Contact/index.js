export const ContactUs = () => {
  return (
    <div className="contact">
      <section className="u-clearfix u-section-13" id="sec-6c07">
        <div className="u-clearfix u-sheet u-valign-middle-xl u-sheet-1">
          <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
            <div className="u-layout" style={{}}>
              <div className="u-layout-row" style={{}}>
                <div className="u-align-center u-container-style u-image u-image-contain u-layout-cell u-left-cell u-size-25-lg u-size-25-md u-size-25-sm u-size-25-xs u-size-30-xl u-size-xs-60 u-image-1" src data-image-width={686} data-image-height={1080}>
                  <div className="u-container-layout u-valign-middle u-container-layout-1" src />
                </div>
                <div className="u-align-left u-container-style u-custom-color-2 u-layout-cell u-right-cell u-size-30-xl u-size-35-lg u-size-35-md u-size-35-sm u-size-35-xs u-size-xs-60 u-layout-cell-2" src>
                  <div className="u-container-layout u-valign-bottom-xs u-container-layout-2">
                    <h2 className="u-text u-text-1"> Free Online Consultation</h2>
                    <p className="u-text u-text-default-lg u-text-2"> Feel free to ask all about surgery and we will be happy to help you. </p>
                    <div className="u-expanded-width-xs u-form u-form-1">
                      <form action="" method="POST" className="u-clearfix u-form-spacing-14 u-form-vertical u-inner-form" source="email" name="form" style={{ padding: 10 }}>
                        <input type="hidden" id="siteId" name="siteId" defaultValue={1115102} />
                        <input type="hidden" id="pageId" name="pageId" defaultValue={1136550} />
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
                          <label htmlFor="message-8e75" className="u-custom-font u-label u-label-4">Do you have any message for us?</label>
                          <textarea placeholder="Write Your Message ..." rows={4} cols={50} id="message-8e75" name="message" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-input-4" required defaultValue={""} />
                        </div>
                        <div className="u-align-right u-form-group u-form-submit">
                          <a className="u-border-none u-btn u-btn-submit u-button-style u-hover-white u-text-custom-color-12 u-btn-1">Send Message</a>
                          <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
                        </div>
                        <div className="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                        <div className="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                        <input type="hidden" defaultValue name="recaptchaResponse" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-container-style u-custom-color-3 u-expanded-width-sm u-expanded-width-xs u-group u-shape-rectangle u-group-1">
            <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-container-layout-3">
              <h2 className="u-text u-text-default-lg u-text-default-md u-text-default-sm u-text-default-xl u-text-3"> need quick answer?</h2>
              <p className="u-text u-text-default-lg u-text-default-md u-text-default-xl u-text-4"> We serve 24 hours in 7 days. still contact us now on whatsapp </p>
              <a className="u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-2"><span className="u-file-icon u-icon u-icon-1"><img src="images/whatsapp.svg" alt /></span>&nbsp;<span style={{ fontSize: '0.875rem' }}> Send Message Whatsapp&nbsp;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}
