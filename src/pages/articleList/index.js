/**
 * Created by dell on 2017/3/15.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, IndexLink, browserHistory, IndexRoute} from 'react-router';
import $ from '../../js/jquery-2.1.3.min'

import Article_hd from '../../components/article_hd/index'
import Article_ft from '../../components/article_ft/index'
import './css/index.scss';

import ArtPic from './img/article.jpg'
import ArtPic2 from './img/article2.jpg'
import ArtPic3 from './img/article3.jpg'

class ArticleList extends Component {
  render() {
    return (
      <div>
        {this.props.children && React.cloneElement(
        this.props.children,{}
        )}
      </div>
    )
  }
}

export default class IndexArticleList extends Component {
  static defaultProps = {
    data: [
      {
        'title': 'Explore the Pacific Northwest1',
        'pic': ArtPic,
        'id': 1,
        'content': 'Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. ' +
        'Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep' +
        ' v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party' +
        ' Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche ' +
        'lomo biodiesel Neutra selfies.'
      },
      {
        'title': 'Explore the Pacific Northwest2',
        'pic': ArtPic2,
        'id': 2,
        'content': 'Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party…'
      },
      {
        'title': 'Explore the Pacific Northwest3',
        'pic': ArtPic3,
        'id': 3,
        'content': 'Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party…'
      }
    ]
  };

  constructor(props){
    super(props);
    $.ajax({
      url:'/api/articleList',
      type:'post',
      data:'',
      dataType:'json',
      success:function(data){
        this.setState({
          data:data
        });
      }.bind(this)
    })
  }

  render() {
    let ArticleNodes = this.state?this.state.data.map((article, index) => {
      if (index == 0) {
        return (
          <li key={index} className='ArticleList_first'>
            <Article_hd id={article.tid} title={article.article_title} time={article.create_time}/>
            <div className="ArticleList_pic">
              <Link to="/articleList/articleDetail">
                <img src={article.img} alt=""/>
              </Link>
            </div>
            <div className="ArticleList_content">
              {article.article_content}
            </div>
            <div className="ArticleList_detail">
              <Link className="textCenter" to={"/articleList/articleDetail/" + article.tid}>Continue Reading</Link>
            </div>
            <Article_ft author={article.article_author}/>
          </li>
        )
      }
      return (
        <li key={index}>
          <div className="ArticleList_pic">
            <Link to={"/articleList/articleDetail/" + article.tid}>
              <img src={article.img} alt=""/>
            </Link>
          </div>
          <div className="article_title textCenter">
            <h2>
              <Link to={"/articleList/articleDetail/" + article.tid}>{article.article_title}</Link>
            </h2>
          </div>
          <div className="ArticleList_content">
            {article.article_content}
          </div>
          <span className="article_time">March 8,2015</span>
        </li>
      )
      }):()=>(<div>loading</div>);
    return (
      <div className="ArticleList">
        <ul>
          {ArticleNodes}
        </ul>
      </div>
    )
  }
}

export {ArticleList}

