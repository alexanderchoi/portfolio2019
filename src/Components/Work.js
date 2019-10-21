import React, { Component } from "react";
import Project from "./Project.js";

class Work extends Component {
  state = {
    message: 'yes'
  }
  render() {
    return (
      <div id="work">
        <Project message={this.state.message}/>
      </div>
    );
  }
}

export default Work;
