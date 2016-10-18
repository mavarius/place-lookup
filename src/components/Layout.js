import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Layout extends Component {
  render () {
    return (
      <div>
        <div className="backgroundImage"></div>
        <div className="container">
          <div className="row">
            <h1 className="appTitle col-xs-12">Place Lookup</h1>
          </div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
