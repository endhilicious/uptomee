import React, { Component } from 'react';

class HeaderTop extends Component {
  render() {
    return (
      <div className="header-top">
  			<div className="logo">
  				<a href="#home">
  					<img src="img/logo_large.png" alt="Logo Brand" />
  				</a>
  			</div>

        <div className="menu clearfix">
            <a href="#about-us">about</a>
            <a href="#contact">contact</a>
        </div>
  		</div>
    );
  }
}

export default HeaderTop;
