import React, { Component } from "react";
import Project from "./Project.js";

class Work extends Component {
  state = {
    projects:
     [
      {
        name:'project 1',
        description:"project 1 description"
      },
      {
        name:'project 2'
      },
      {
        name:'project 3'
      },
    ],
    message: 'yes'
  }
  render() {
    return (
      <div id="work">
        <span>Work Component</span>
        {this.state.projects.map((project, index) =>
          <Project
            key={index}
            project={project}
          />
        )}
      </div>
    );
  }
}

export default Work;
