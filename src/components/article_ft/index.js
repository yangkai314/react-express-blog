/**
 * Created by dell on 2017/3/20.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link,IndexLink, browserHistory, IndexRoute} from 'react-router';

import './css/index.scss';

export default class Article_ft extends Component {
  render() {
    return (
      <div className="article_ft clear">
        <span className="comment_num">4 comments</span>
        <span className="pullRight">by : yang kai</span>
      </div>
    )
  }
}