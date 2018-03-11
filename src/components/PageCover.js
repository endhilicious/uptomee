import React, { Component } from 'react';

class PageCover extends Component {
  render() {
    return (

      <div className="page-cover" id="home">

          <div className="cover-bg pos-abs full-size bg-img" data-image-src="img/bg-default.jpg"></div>


          <div className="cover-bg pos-abs full-size slide-show">
            <i className="img" data-src="http://kabardunia.com/wp-content/uploads2/2017/04/4-Keuntungan-Tampil-Modis-dengan-Update-Model-Hijab-Terbaru.jpg"></i>
            <i className="img" data-src="https://images.f2fcdn.net/files/fashion-5/laudyacbella-dhijabers-kantini.jpg"></i>
            <i className="img" data-src="http://www.pixoto.com/images-photography/people/portraits-of-women/hijab-with-erma-5333859323346944.jpg"></i>
            <i className="img" data-src="http://parasayu.net/wp-content/uploads/2017/06/Hijab-Cantik-dan-Simple.jpg"></i>
          </div>

          <div className="cover-bg pos-abs full-size bg-color" data-bgcolor="rgba(51, 2, 48, 0.12)"></div>

      </div>
    );
  }
}

export default PageCover;
