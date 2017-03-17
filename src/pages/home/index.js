/**
 * Created by dell on 2017/3/15.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, IndexLink, browserHistory, IndexRoute} from 'react-router';

import './css/index.scss';

import IndexArticleList from '../articleList/index'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <IndexArticleList  />
      </div>
    )
  }
}