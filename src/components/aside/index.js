/**
 * Created by dell on 2017/3/15.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link,IndexLink, browserHistory, IndexRoute} from 'react-router';

import './css/index.scss';
import MePhoto from './img/me.jpg'

export default class Aside extends Component {
  render() {
    return (
      <div className="pullRight aside">
        <div className="aside-aboutMe textCenter widget">
          <h4 className="widget_title">ABOUT ME</h4>
          <img src={MePhoto} alt=""/>
          <p>一只苦逼的前端狗，努力充电ing</p>
        </div>
        <div className="aside-tag textCenter widget">
          <h4 className="widget_title">TAG</h4>
          <div className="tags textLeft">
            <Link to="/">javascript</Link>
            <Link to="/">html</Link>
            <Link to="/">css</Link>
            <Link to="/">react</Link>
            <Link to="/">随笔</Link>
          </div>
        </div>
      </div>
    )
  }
}
