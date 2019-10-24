import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <div>
        <h5>&mdash; {this.props.project.client}</h5>
        <img className="temp" src={this.props.project.images[0]} alt="none" />

        <div className="projectFooter">
          <h5>
            <a href={this.props.project.clientWebsite} className="underline">
              {this.props.project.client}
            </a>
            <span> - </span>
            {this.props.project.title}
          </h5>
          <p>{this.props.project.description}</p>
          <span> - </span>
          <br />
          <div>+1714 337 0522</div>
          <div>
            <span className="underline">alexchoiweb@gmail.com</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
