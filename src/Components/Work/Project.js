import React, { Component } from "react";

class Project extends Component {
  componentDidMount() {
    var tooltip = document.getElementById('tooltip');
      window.onmousemove = function (e) {
        var x = e.clientX,
            y = e.clientY;
        tooltip.style.top = (y - 420) + 'px';
        tooltip.style.left = (x - 40) + 'px';
       };
  }
  
  render() {
    const copyEmailToClipBoard = () => {
      document.querySelector('.email').childNodes[0].select();
      document.execCommand('Copy');
      document.activeElement.blur()
      document.getElementById('tooltip').innerText='Copied to clipboard!'
    }

    const resetToolTipText = () => {
      document.getElementById('tooltip').innerText='Click to copy'
    }

    return (
      <div>
        <h5>&mdash; {this.props.project.client}</h5>
        <img className="temp" src={this.props.project.images[0]} alt="none" />

        <div className="projectFooter">
          <h5>
            <a href={this.props.project.clientURL} target="_blank" rel="noopener noreferrer" className="clientURL underline">
              {this.props.project.client}
            </a>
            <span> - </span>
            {this.props.project.title}
          </h5>
          <p>{this.props.project.description}</p>
          <span> - </span>
          <br />
          <div>+1 714 337 0522</div>
          <div>
            <span className="email" onClick={function() {copyEmailToClipBoard()}} onMouseLeave={function() {resetToolTipText()}}><textarea className="noselect" spellCheck="false" defaultValue="alexchoiweb@gmail.com"></textarea></span><span id="tooltip">Click to copy</span>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Project;
