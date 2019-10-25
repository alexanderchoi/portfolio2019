import React, { Component } from "react";
import Project from "./Project.js";
import NKPImages from './ProjectImages/NKPImages.js'
import ASFACImages from './ProjectImages/ASFACImages.js'

class Work extends Component {
  state = {
    projects: [
      {
        client: "NKP Medical",
        clientURL: "https://www.nkpmedical.com/",
        title: "Plastic Surgery Landing Pages",
        description: "Front end web development, debugging and support.",
        images: NKPImages
      },
      {
        client: "A Show For A Change",
        clientURL: "https://ashowforachange.com/",
        title: "Social-conscious streaming platform",
        description: "Front end web development, debugging and support.",
        images: ASFACImages
      },
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
