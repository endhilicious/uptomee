import React, {Component} from 'react';

class PageContact extends Component {

  render(){
    return (
      <div className="section page-contact page page-cent  bg-color" data-bgcolor="rgba(95, 25, 208, 0.88)s" id="s-contact">

            <div className="slide" id="information">
              <section className="content">
                <header className="p-title">
                  <h3>Contact<i className="ion ion-location">
                    </i>
                  </h3>
                  <ul className="buttons">
                    <li className="show-for-medium-up">
                      <a title="About" href="#about-us" ><i className="ion ion-android-information"></i></a>
                    </li>

                    <li>
                      <a title="Message" href="#contact/message"><i className="ion ion-email"></i></a>
                    </li>
                  </ul>
                </header>

                <div className="contact">
                  <div className="row">
                    <div className="medium-6 columns left">
                      <ul>
                        <li>
                          <h4>Email</h4>
                          <p><a href="mailto://contact@mail.com">contactemail@mail.com</a></p>
                        </li>
                        <li>
                          <h4>Address</h4>
                          <p>99 Location Street
                          <br />Antartica SP</p>
                        </li>
                        <li>
                          <h4>Phone</h4>
                          <p>+999 123 456 89</p>
                        </li>
                      </ul>
                    </div>
                    <div className="medium-6 columns social-links right">
                      <ul>


                        <li className="show-for-medium-up">
                          <h4>Website</h4>
                          <p><a href="http://www.highhay.com">www.highhay.com</a></p>
                        </li>
                        <li  className="show-for-medium-up">
                          <h4>Find us on</h4>

                          <div className="socialnet">
                            <a href="#"><i className="ion ion-social-facebook"></i></a>
                            <a href="#"><i className="ion ion-social-instagram"></i></a>
                            <a href="#"><i className="ion ion-social-twitter"></i></a>
                            <a href="#"><i className="ion ion-social-pinterest"></i></a>
                            <a href="#"><i className="ion ion-social-tumblr"></i></a>
                          </div>

                        </li>
                        <li>
                          <p><img src="img/logo_large.png" alt="Logo" className="logo" /></p>
                          <p className="small">Bientot by <strong><a href="http://highhay.com">Brand</a></strong>. All right reserved 2015</p>
                        </li>
                      </ul>

                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="slide" id="message">
              <section className="content">
                <header className="p-title">
                  <h3>Write to us<i className="ion ion-email">
                    </i>
                  </h3>
                  <ul className="buttons">
                    <li className="show-for-medium-up">
                      <a title="About" href="#about-us"><i className="ion ion-android-information"></i></a>
                    </li>
                    <li>
                      <a title="Contact" href="#contact/information"><i className="ion ion-location"></i></a>
                    </li>

                  </ul>
                </header>


                <div className="page-block c-right v-zoomIn">
                  <div className="wrapper">
                    <div>
                      <form className="message form send_message_form" method="get" action="ajaxserver/serverfile.php">
                        <div className="fields clearfix">
                          <div className="input">
                            <label for="mes-name">Name </label>
                            <input id="mes-name" name="name" type="text" placeholder="Your Name" required /></div>
                          <div className="buttons">
                            <button id="submit-message" className="button email_b" name="submit_message">Ok</button>
                          </div>
                        </div>
                        <div className="fields clearfix">
                          <div className="input">
                            <label for="mes-email">Email </label>
                            <input id="mes-email" type="email" placeholder="Email Address" name="email" required />
                          </div>
                        </div>
                        <div className="fields clearfix no-border">
                          <label for="mes-text">Message </label>
                          <textarea id="mes-text" placeholder="Message ..." name="message" required></textarea>

                          <div>
                            <p className="message-ok invisible">Your message has been sent, thank you.</p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>

            </div>
      </div>
    )
  }
}
export default PageContact
