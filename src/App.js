import React, { Component } from 'react';
import $ from 'jquery';

import './fonts/opensans/stylesheet.css';
import './fonts/asap/stylesheet.css';
import './css/ionicons.min.css';
import './css/foundation.min.css';
import './js/vendor/jquery.fullPage.css';
import './js/vegas/vegas.min.css';
import './css/main.css';
import './css/main_responsive.css';
import './css/style-font1.css';


import PageLoader from './components/PageLoader';
import HeaderTop from './components/HeaderTop';
import QuickLink from './components/QuickLink';
import PageCover from './components/PageCover';
import Main from './components/Main';
import PageFooter from './components/PageFooter';
import loadjs from './loadjs.js';

class App extends Component {
  componentDidMount() {
    Loadjs([
      './js/main.js'
    ])
  }
  render() {
    return (
        <div>
          <PageLoader />
          <HeaderTop />
          <QuickLink />
          <PageCover />
          <Main />
          <PageFooter />
        </div>
    );
  }
}

export default App;
