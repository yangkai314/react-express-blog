/**
 * Created by dell on 2017/3/7.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link,IndexLink, browserHistory, IndexRoute} from 'react-router';

import './css/variable.scss';
import './css/common.scss';

import Nav from './components/nav/index'
import Header from './components/header/index'
import Footer from './components/footer/index'
import Aside from './components/aside/index'

import Home from './pages/home/index'
import Contact from './pages/contact/index'
import AboutMe from './pages/aboutMe/index'
import IndexArticleList,{ArticleList} from './pages/articleList/index'
import ArticleDetail from './pages/articleDetail/index'


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <div className="body">
          <div className="container clear">
            <div className="pullLeft body_content">
              {this.props.children}
            </div>
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
        <IndexRoute component={Home} />
        <route path="aboutMe" component={AboutMe}/>
        <route path="contact" component={Contact}/>
        <route path="articleList" component={ArticleList}>
          <IndexRoute component={IndexArticleList}/>
          <route path="articleDetail/:id" component={ArticleDetail}/>
        </route>
      </route>
    </Router>
  ),
  document.getElementById('app')
);