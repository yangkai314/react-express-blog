import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, IndexLink, browserHistory, IndexRoute} from 'react-router';

import './css/index.scss';

class Nav extends Component {
  handleSearchToggle() {
    console.log(this);
  }

  render() {
    return (
      <div className="nav">
        <div className="container clear">
          <NavList />
          <NacList_phone />
          <NavSearch onSearchToggle={this.handleSearchToggle}/>
        </div>
      </div>
    )
  }
}

class NavList extends Component {
  render() {
    return (
      <ul className="pullLeft clear navList">
        <li><IndexLink to="/">HOME</IndexLink></li>
        <li><IndexLink to="/aboutMe">ABOUT ME</IndexLink></li>
        <li><IndexLink to="/contact">CONTACT</IndexLink></li>
      </ul>
    )
  }
}

class NacList_phone extends Component {
  constructor(props){
    super(props);
    this.state={
      isShow :false
    }
  }

  handleBtnClick(e) {
    console.log(1);

    this.setState({isShow:!this.state.isShow})
  }

  handleLiClick(e) {
    console.log(2);
    this.setState({isShow:false})
  }

  render() {
    let style={
      display : this.state.isShow?'block':'none'
    };
    return (
      <div className="pullLeft clear navList_phone">
        <span onClick={e=>this.handleBtnClick(e)} className="iconfont icon-menu" />
        <ul style={style}>
          <li onClick={e=>this.handleLiClick(e)}><IndexLink to="/">HOME</IndexLink></li>
          <li onClick={e=>this.handleLiClick(e)}><IndexLink to="/aboutMe">ABOUT ME</IndexLink></li>
          <li onClick={e=>this.handleLiClick(e)}><IndexLink to="/contact">CONTACT</IndexLink></li>
        </ul>
      </div>
    )
  }
}

class NavSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }

  handleSearchToggle() {
    this.setState({isShow: !this.state.isShow})
  }

  render() {
    return (
      <div className="pullRight navSearch">
        <form action="">
          <input type="search" placeholder="search and hit enter"/>
        </form>
        <i className="iconfont icon-sousuo-sousuo navSearch-desktop">

        </i>
        <i className={"iconfont icon-sousuo-sousuo navSearch-toggle"} onClick={e => this.handleSearchToggle(e)}>

        </i>
        <div className={this.state.isShow ? 'search-show' : 'search-hide'}>
          <form action="">
            <input type="search" placeholder="search and hit enter"/>
          </form>
        </div>
      </div>
    )
  }
}

export default Nav