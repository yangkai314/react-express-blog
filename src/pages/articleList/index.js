/**
 * Created by dell on 2017/3/15.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link,IndexLink, browserHistory, IndexRoute} from 'react-router';

import './css/index.scss';



export default class ArticleList extends Component {
  render() {
    let ArticleNodes=this.props.data.map((article,index)=>{
      if(index==0){
        return (
          <li key={index} className='ArticleList_first'>
            <div className="ArticleList_hd textCenter">
              <h2>
                <Link to="/">{article.title}</Link>
              </h2>
              <span className="ArticleList_time">March 8,2015</span>
            </div>
            <div className="ArticleList_pic">
              <img src={article.pic} alt=""/>
            </div>
            <div className="ArticleList_content">
              {article.content}
            </div>
          </li>
        )
      }
      return (
        <li key={index}>
          <div className="ArticleList_pic">
            <img src={article.pic} alt=""/>
          </div>
          <div className="ArticleList_hd textCenter">
            <h2>
              <Link to="/">{article.title}</Link>
            </h2>
          </div>
          <div className="ArticleList_content">
            {article.content}
          </div>
          <span className="ArticleList_time">March 8,2015</span>
        </li>
      )
    });
    return (
      <div className="ArticleList">
        <ul>
          {ArticleNodes}
        </ul>
      </div>
    )
  }
}