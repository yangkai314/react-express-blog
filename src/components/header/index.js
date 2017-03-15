import React, {Component} from 'react';
import {render} from 'react-dom';
import './css/index.scss'

import Img from './img/logo.png'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <img src={Img} alt=""/>
        </div>
      </div>
    )
  }
}