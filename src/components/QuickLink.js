import React, { Component } from 'react';

class QuickLink extends Component {
  render() {
    return (
      <div>
      <nav className="quick-link count-6 nav-left">
        <ul id="qmenu">
          <li data-menuanchor="home">
            <a href="#home" className=""><i className="icon ion ion-home"></i>
            </a>
            <span className="title">Home page</span>
          </li>
          <li data-menuanchor="when">
            <a href="#when" className=""><i className="icon ion ion-android-alarm"></i>
            </a>
            <span className="title">When</span>
          </li>
          <li data-menuanchor="register">
            <a href="#register"><i className="icon ion ion-compose"></i>
            </a>
            <span className="title">Stay in touch</span>
          </li>
          <li data-menuanchor="about-us">
            <a href="#about-us"><i className="icon ion ion-android-information"></i>
            </a>
            <span className="title">About Us</span>
          </li>
          <li data-menuanchor="contact">
            <a href="#contact"><i className="icon ion ion-android-call"></i>
            </a>
            <span className="title">Contact</span>
          </li>
          <li data-menuanchor="contact">
            <a href="#contact/message"><i className="icon ion ion-email"></i>
            </a>
            <span className="title">Write to us</span>
          </li>
        </ul>
      </nav>
      </div>
    );
  }
}

export default QuickLink;
