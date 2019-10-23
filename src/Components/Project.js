import React, { Component } from "react";

class Project extends Component {
  
  render() {
    return (
      <div>
        <span>{this.props.project.name}</span>
      </div>
    );
  }
}

export default Project;
