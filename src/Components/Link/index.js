import React, { Component } from 'react'

export default class Link extends Component {
  render() {
    return (
      <div className="test-class">
        <a href={this.props.link}>{this.props.children}</a>
      </div>
    )
  }
}
