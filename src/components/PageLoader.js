import React, { Component } from 'react';

class PageLoader extends Component {
  render() {
    return (
      <div className="page-loader haha" id="page-loader">
          <div><i className="ion ion-loading-d"></i><p>loading</p></div>
      </div>
    );
  }
}

export default PageLoader;
