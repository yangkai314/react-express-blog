/**
 * Created by dell on 2017/4/1.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, IndexLink, browserHistory, IndexRoute} from 'react-router';
import $ from '../../js/jquery-2.1.3.min'

import './css/index.scss';

export default class Write extends Component{
  handelSubmit(e){
    console.log(1);
    var data=$('form').serialize();
    console.log(data);
    $.ajax({
      url:'/api/write',
      type:'post',
      data:data,
      dataType:'json',
      success:function(){
        alert('success');
      }
    })
  }

  render(){
    console.log(Number('100-1'));
    return (
      <div className="write">
        <form action="">
          <div className="write_line">
            <label htmlFor="title">title</label>
            <input type="text" classID="title" name="title"/>
          </div>
          <div className="write_line">
            <label htmlFor="author">author</label>
            <input type="text" classID="author" name="author"/>
          </div>
          <div className="write_line">
            <label htmlFor="content">content</label>
            <textarea type="text" classID="content" name="content"/>
          </div>
          <div className="write_line">
            <a className="submit" href="javascript:;" onClick={e=>this.handelSubmit(e)}>submit</a>
            {/*<a className="submit2" href="javascript:;" onClick={e=>this.handelSubmit(e)}>submit</a>*/}
          </div>
        </form>
      </div>
    )
  }
}