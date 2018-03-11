import React, {Component} from 'react';
import PageHome from './PageHome';
import PageWhen from './PageWhen';
import PageRegister from './PageRegister';
import PageAbout from './PageAbout';
import PageContact from './PageContact';

class Main extends Component {

  render(){
    return (
        <div>
          <main className="page-main" id="mainpage">
            <PageHome />
            <PageWhen />
            <PageRegister />
            <PageContact />
          </main>
        </div>
    )
  }
}
export default Main
