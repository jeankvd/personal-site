import React, { Component } from "react";

import Showcase from './Projects/Showcase';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "showcase"
    };
  }

  handleClick = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({
      selected: e.target.id
    })
  }

  render() {
    return (
      <div className="work">
        <h1>My Work</h1>
        <p className="lead">To see the code at github click here</p>
        <ul>
          <li><span id="showcase" onClick={this.handleClick}>Showcase</span></li>
          <li><span id="three" onClick={this.handleClick}>321</span></li>
        </ul>
        <Showcase />
      </div>
    );
  }
}

export default Work;
