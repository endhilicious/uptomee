import React, {Component} from 'react';

class PageWhen extends Component {

  render(){
    return (
      <div className="section page-when page page-cent" id="s-when">
        <section className="content">
            <div className="clock clock-countdown">
                <div className="site-config"
                   data-date="10/31/2015 23:00:00"
                   data-date-timezone="+0"
                   ></div>
                <header className="header">
                  Coming <strong>soon</strong>
                </header>

                <div className="elem-left">
                    <div className="digit hours">00</div>
                    <div className="text">hrs</div>
                </div>
                <div className="elem-center">
          	      <span className="text top"><img className="img" alt="Logo" src="img/logo_large.png" /></span>
                    <div className="digit days">000</div>
                    <div className="text">days</div>
                </div>
                <div className=" elem-right">
                    <div className="digit minutes">00</div>
                    <div className="text">min</div>
                </div>


                <div className="second">
                  <input className="knob container"
                       id="second-knob"
                        data-width="400"
                        data-height="400"
                     data-displayInput="false"
                      data-fgColor="#fff"
                      data-bgColor="rgba(255,255,255,0)"
                      data-thickness=".07"
                      value="0"
                      data-displayPrevious="true"
                       data-max="6000"
                       />
                </div>
            </div>

        </section>
        <footer className="p-footer p-scrolldown">
            <a href="#register">
                <div className="arrow-d">
                  <div className="before">Stay&nbsp;in</div>
                  <div className="after">Touch</div>
                  <div className="circle"></div>
                </div>
            </a>
        </footer>
      </div>
    )
  }
}
export default PageWhen
