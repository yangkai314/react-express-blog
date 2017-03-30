/**
 * Created by dell on 2017/3/20.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link,IndexLink, browserHistory, IndexRoute} from 'react-router';

import './css/index.scss'

export default class Article_hd extends Component {
  render() {
    let Months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Oct","Nov","Dec"];
    let date=new Date(this.props.time);
    let time=Months[date.getMonth()]+' '+date.getDate()+','+date.getFullYear();
    return (
      <div className="article_title textCenter">
        <h2>
          <Link to={"/articleList/articleDetail/"+this.props.id}>{this.props.title}</Link>
        </h2>
        <span className="article_time">{time}</span>
      </div>
    )
  }
}