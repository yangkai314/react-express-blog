/**
 * Created by dell on 2017/3/20.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link,IndexLink, browserHistory, IndexRoute} from 'react-router';

import './css/index.scss'

export default class Article_hd extends Component {
  render() {
    return (
      <div className="article_title textCenter">
        <h2>
          <Link to={"/articleList/articleDetail/"+this.props.id}>{this.props.title}</Link>
        </h2>
        <span className="article_time">March 8,2015</span>
      </div>
    )
  }
}