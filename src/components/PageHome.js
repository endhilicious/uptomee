import React, {Component} from 'react';

class PageHome extends Component {

  render(){
    return (
      <div className="section page-home page page-cent" id="s-home">
      	<div className="logo-container">
      		<img className="h-logo" src="img/logo_only.png" alt="Logo" />
      	</div>

      	<section className="content">
      		<header className="header">
      		  <div className="h-left">
      		    <h2>New <strong>Company</strong></h2>
      		  </div>
      		  <div className="h-right">
      		    <h3>Lorem <br />agency</h3>
      		    <h4 className="subhead"><a href="#when">Available here soon</a></h4>
      		  </div>
      		</header>
      	</section>


      	<footer className="p-footer p-scrolldown">
      	  <a href="#when">
      	      <div className="arrow-d">
      	        <div className="before">Tell&nbsp;me</div>
      	        <div className="after">When</div>
      	        <div className="circle"></div>
      	      </div>
      	  </a>
      	</footer>
      </div>
    )
  }
}
export default PageHome
