import React, { Component } from 'react'

export default class Navalink extends Component {
  render() {
    
    return (
        
         <li class="nav-item"><a class="nav-link js-scroll-trigger" href={this.props.link}> {this.props.text}</a></li>
    )
  }
}
