/**
 * Created by dell on 2017/3/15.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link,IndexLink, browserHistory, IndexRoute} from 'react-router';

import Article_hd from '../../components/article_hd/index'
import Article_ft from '../../components/article_ft/index'
import './css/index.scss';

export default class ArticleDetail extends Component {

  render() {
    return (
      <div className="ArticleDetail">
        <Article_hd id={this.props.routeParams.id} title={this.props.title}/>
        <div className="ArticleDetail"></div>
        <Article_ft />
      </div>
    )
  }
}