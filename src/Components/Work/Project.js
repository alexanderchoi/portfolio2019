import React, { Component } from "react";

class Project extends Component {
  componentDidMount() {
    function isVisible(element) {
      console.log(element)
      let elementBox = element.getBoundingClientRect();
      let distanceFromTop = -200;
      return ((elementBox.top - window.innerHeight) < distanceFromTop);
    }

    function scanDocument() {
      let hiddenElements = document.querySelectorAll('.hidden');
      hiddenElements.forEach(function(section) {
          if(isVisible(section)) {
              section.classList.remove('hidden');
          };
      });
    }
    function throttle(fn, wait) {
      var time = Date.now();
      return function() {
        if ((time + wait - Date.now()) < 0) {
          fn();
          time = Date.now();
        }
      }
    }

    // document.addEventListener("load", document.getElementById('projectImages').classList.remove('hidden'))
    document.addEventListener("scroll", throttle(scanDocument, 500));
  }

  render() {    
    return (
      
      <div id="Project">
        <h3 className="projectTitle">&mdash; {this.props.project.client}</h3>
        <div className="projectCarousel">
          <div id="div-carouselButtons">
            <div id="carouselButtons">
              <span
                onClick={this.props.updateProjectView}
                className="carouselButton"
              >
                <i className="fas fa-chevron-left"></i>
              </span>
              <span
                onClick={this.props.updateProjectView}
                className="carouselButton"
              >
                <i className="fas fa-chevron-right"></i>
              </span>
            </div>
          </div>
          
          <div id="projectImages" className="section">
            <img
              className="imgBorder"
              src={this.props.project.images[0]}
              alt="none"
            />
            <img
              className="imgBorder"
              src={this.props.project.images[1]}
              alt="none"
            />
            <img
              className="imgBorder"
              src={this.props.project.images[2]}
              alt="none"
            />
          </div>
        </div>

        <div className="projectFooter">
          <div>
          <h3>
            <a
              href={this.props.project.clientURL}
              target="_blank"
              rel="noopener noreferrer"
              className="clientURL underline"
            >
              {this.props.project.client}
            </a>
            <span> - </span>
            {this.props.project.title}
          </h3>
          <p>{this.props.project.description}</p>
          <p> - </p>
          {this.props.project.github ? (
            <a
              href={this.props.project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View code here
            </a>
          ) : (
            <span></span>
          )}
          <br />
          <br />
          <div><span>+1 714 337 0522</span></div>
          <div>
            <span>alexchoiweb@gmail.com</span>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Project;
