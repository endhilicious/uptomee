import React, {Component} from 'react';

class PageAbout extends Component {

  render(){
    return (
      <div className="section page-about page page-cent" id="s-about-us">
        <section className="content">
            <header className="p-title">
      			<h3>About Us
      				<i className="ion ion-android-information"></i>
      			</h3>
      				<h2>We <span className="bold">make</span> only <span className="bold">beautiful</span> things</h2>
            </header>
            <article className="text">
                <p>Lorem ipsum <strong>magicum </strong>dolor sit amet, consectetur adipiscing elit. Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla.</p>
                <p>Aenean ultricies odio at erat facilisis tincidunt. Fusce tempor auctor justo, nec facilisis quam vehicula vel. Aenean non mattis purus, eget lobortis odio. </p>
            </article>
        </section>
        <footer className="p-footer p-scrolldown">
            <a href="#contact">
                <div className="arrow-d">
                  <div className="before">Contact</div>
                  <div className="after">Message</div>
                  <div className="circle"></div>
                </div>
            </a>
        </footer>
      </div>
    )
  }
}
export default PageAbout
