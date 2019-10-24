import React, { Component } from "react";
import Project from "./Project.js";
import nkp1 from "../../image/nkp/drhurvitz.png";

class Work extends Component {
  state = {
    projects: [
      {
        client: "NKP Medical",
        clientWebsite: "https://www.nkpmedical.com/",
        title: "Plastic Surgery Landing Pages",
        description: "Front end web development, debugging and support.",
        images: [nkp1]
      }
      // {
      //   name: "project 2"
      // },
      // {
      //   name: "project 3"
      // }
    ]
  };
  render() {
    return (
      <div id="work">
        {this.state.projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    );
  }
}

export default Work;
