import React, {Component} from 'react';

class PageRegister extends Component {

  render(){
    return (
      <div className="section page-register page page-cent " id="s-register">
        <section className="content">
            <header className="p-title">
                <h3>Register <i className="ion ion-compose"></i></h3>
            </header>
            <div>
                <form id="mail-subscription" className="form magic send_email_form" method="get" action="ajaxserver/serverfile.php">
                    	<p className="invite center">Please, write your email below to stay in touch with us :</p>
      	            <div className="fields clearfix">
      	              	<div className="input">
      		                <label for="reg-email">Email </label>
      		                <input id="reg-email" className="email_f"  name="email" type="email" required placeholder="your@email.address" data-validation-type="email" />
      	            	</div>
      					<div className="buttons">
      						<button id="submit-email" className="button email_b" name="submit_email">Ok</button>
      					</div>
      	            </div>
                    	<p className="email-ok invisible"><strong>Thank you</strong> for your subscription. We will inform you.</p>
                </form>
            </div>
        </section>
        <footer className="p-footer p-scrolldown">
            <a href="#about-us">
                <div className="arrow-d">
                  <div className="before">About</div>
                  <div className="after">Lorem</div>
                  <div className="circle"></div>
                </div>
            </a>
        </footer>
      </div>
    )
  }
}
export default PageRegister
