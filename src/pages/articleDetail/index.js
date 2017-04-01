/**
 * Created by dell on 2017/3/15.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, IndexLink, browserHistory, IndexRoute} from 'react-router';
import Remarkable from 'remarkable'
import $ from '../../js/jquery-2.1.3.min'

import Article_hd from '../../components/article_hd/index'
import Article_ft from '../../components/article_ft/index'
import './css/index.scss';

import ArtPic from './img/article.jpg'
import ArtRelate1 from './img/article-relate.jpg'

export default class ArticleDetail extends Component {
  static defaultProps = {
    'title': 'Explore the Pacific Northwest1',
    'pic': ArtPic,
    'id': 1,
    'content': 'Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. ' +
    'Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep' +
    ' v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party' +
    ' Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche ' +
    'lomo biodiesel Neutra selfies.'
  };

  constructor(props){
    super(props);
    let that=this;
    $.ajax({
      url:'/api/articleDetail',
      type:'post',
      data:{id:that.props.routeParams.id},
      dataType:'json',
      success:function(data){
        this.setState(data);
      }.bind(this)
    })
  }

  // rawMarkup(markdown){
  //   var md = new Remarkable();
  //   var rawMarkups = md.render(this.props.children.toString());
  //   return { __html: rawMarkups };
  // }

  render() {
    let md = new Remarkable();
    let content={__html:md.render(this.state?this.state.article_content:'123456789')};
    return (
      <div className="ArticleDetail">
        <Article_hd id={this.props.routeParams.id} title={this.state?this.state.article_title:''} time={this.state?this.state.create_time:''}/>
        <div className="ArticleDetail_pic">
          <img src={this.state?this.state.img:''} alt=""/>
        </div>
        <div className="ArticleDetail_content" dangerouslySetInnerHTML={content}>
          {/*<p dangerouslySetInnerHTML={content}></p>*/}
          {/*{this.state?this.state.article_content:'123456789'}*/}
        </div>
        <div className="ArticleDetail"></div>
        <Article_ft author={this.state?this.state.article_author:''} />

        <div className="article-related">
          <h4 className="article-related_hd textCenter">
            <span>YOU MIGHT ALSO LIKE</span>
          </h4>
          <ul className="article-related_bd clear">
            <li>
              <Link to="/"><img src={ArtRelate1} alt=""/></Link>
              <h4>
                <Link to="/">Snowy Mountains</Link>
              </h4>
              <span className="article_time">March 7, 2015</span>
            </li>
            <li>
              <Link to="/"><img src={ArtRelate1} alt=""/></Link>
              <h4>
                <Link to="/">Snowy Mountains</Link>
              </h4>
              <span className="article_time">March 7, 2015</span>
            </li>
            <li>
              <Link to="/"><img src={ArtRelate1} alt=""/></Link>
              <h4>
                <Link to="/">Snowy Mountains</Link>
              </h4>
              <span className="article_time">March 7, 2015</span>
            </li>
          </ul>
        </div>

        <Comments />
        <Reply />
      </div>
    )
  }
}

class Comments extends Component {
  render() {
    return (
      <div className="article-comments">
        <div className="article-comments_hd textCenter">
          <span>4 comments</span>
        </div>
        <ul>
          <li>
            <div className="comment_author">SOLO PINE</div>
            <div className="comment_time">March 8, 2015 at 9:00 pm</div>
            <div className="comment_content">Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed.</div>
          </li>
          <li>
            <div className="comment_author">SOLO PINE</div>
            <div className="comment_time">March 8, 2015 at 9:00 pm</div>
            <div className="comment_content">Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed.</div>
          </li>
        </ul>
      </div>
    )
  }
}

class Reply extends Component {
  render() {
    return (
      <div className="article-reply">
        <h3>LEAVE A MESSAGE</h3>
        <form action="">
          <div className="reply_form">
            <label htmlFor="author">姓名*</label>
            <input type="text" classID="author"/>
          </div>
          <div className="reply_form">
            <label htmlFor="author">E-mail*</label>
            <input type="text" classID="author"/>
          </div>
          <div className="reply_form">
            <textarea placeholder="leave a message"></textarea>
          </div>
          <div className="reply_form">
            <a className="submit_comment" href="javascript:;">提交</a>
          </div>
        </form>
      </div>
    )
  }
}