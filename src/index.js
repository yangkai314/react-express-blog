/**
 * Created by dell on 2017/3/7.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link,IndexLink, browserHistory, IndexRoute} from 'react-router';

import './css/common.scss';

import Page1 from './pages/page1/index'
import Page2,{IndexPage2} from './pages/page2/index'
// import IndexPage2 from './pages/page2/index'
import Page3 from './pages/page3/index'
import Nav from './components/nav/index'
import Header from './components/header/index'
import Footer from './components/footer/index'
import Aside from './components/aside/index'

import Home from './pages/home/index'


class Action extends Component {
  render() {
    return (
      <div className="action">action</div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <div className="body">
          <div className="container clear">
            {/*<div className="pullLeft content">*/}
              {this.props.children}
            {/*</div>*/}
            <Aside />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

render(
  (
    <Router history={browserHistory}>
      <route path="/" component={App}>
        <IndexRoute component={Home}/>
        <route path="page1" component={Page1}/>
        <route path="page2" component={Page2}>
          <IndexRoute component={IndexPage2}/>
          <route path="page3" component={Page3}/>
        </route>
      </route>
    </Router>
  ),
  document.getElementById('app')
);