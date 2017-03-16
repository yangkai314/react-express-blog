/**
 * Created by dell on 2017/3/15.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, IndexLink, browserHistory, IndexRoute} from 'react-router';

import './css/index.scss';

import ArticleList from '../articleList/index'
import ArtPic from '../articleList/img/article.jpg'
import ArtPic2 from '../articleList/img/article2.jpg'
import ArtPic3 from '../articleList/img/article3.jpg'
let data=[
  {
    'title':'Explore the Pacific Northwest1',
    'pic':ArtPic,
    'content':'Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. ' +
    'Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep' +
    ' v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party' +
    ' Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche ' +
    'lomo biodiesel Neutra selfies.'
  },
  {
    'title':'Explore the Pacific Northwest2',
    'pic':ArtPic2,
    'content':'Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party…'},
  {
    'title':'Explore the Pacific Northwest3',
    'pic':ArtPic3,
    'content':'Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party…'}
];

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <ArticleList data={data} />
      </div>
    )
  }
}