import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link,IndexLink, browserHistory, IndexRoute} from 'react-router';

import './css/index.scss';

class Nav extends Component {
  handleSearchToggle () {
    console.log(this);
  }

  render() {
    return (
      <div className="nav">
        <div className="container clear">
          <NavList />
          <NavSearch onSearchToggle={this.handleSearchToggle}/>
        </div>
      </div>
    )
  }
}

class NavList extends Component {
  render(){
    return (
      <ul className="pullLeft clear navList">
        <li><IndexLink to="/">HOME</IndexLink></li>
        <li><IndexLink to="/">ABOUT ME</IndexLink></li>
        <li><IndexLink to="/">CONTACT</IndexLink></li>
      </ul>
    )
  }
}

class NavSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShow : false
    };
  }

  handleSearchToggle () {
    this.setState({isShow:!this.state.isShow})
  }

  render() {
    return (
      <div className="pullRight navSearch">
        <form action="">
          <input type="search" placeholder="search and hit enter"/>
        </form>
        <i className="iconfont icon-sousuo-sousuo navSearch-desktop">

        </i>
        <i className={"iconfont icon-sousuo-sousuo navSearch-toggle"} onClick={e=>this.handleSearchToggle(e)}>

        </i>
        <div className={this.state.isShow?'search-show':'search-hide'}>
          <form action="">
            <input type="search" placeholder="search and hit enter"/>
          </form>
        </div>
      </div>
    )
  }
}

export default Nav