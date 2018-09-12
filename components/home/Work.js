import React, { Component } from "react";

import Showcase from './Projects/Showcase';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "showcase"
    };
  }

  render() {
    return (
      <div className="work">
        <h1>My Work</h1>
        <p className="lead">To see the code at github click here</p>
        <Showcase />
      </div>
    );
  }
}

export default Work;
