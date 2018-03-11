import React, { Component } from 'react';

class PageFooter extends Component {
  render() {
    return (
      <footer className="page-footer">
        <span>Find us on
          <a href="http://www.facebook.com/highhay" target="_blank"><i className="ion icon ion-social-facebook"></i></a>
          <a href="http://www.instagram.com/miradontsoa" target="_blank"><i className="ion icon ion-social-instagram"></i></a>
          <a href="http://twitter.com/miradontsoa" target="_blank"><i className="ion icon ion-social-twitter"></i></a>
        </span>
      </footer>
    );
  }
}

export default PageFooter;
