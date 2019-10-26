import React, { Component } from "react";

class Navbar extends Component {
  state = {
    display: "work"
  };
  render() {
    return (
      <div id="Navbar">
        <h2 className="siteTitle">Alex Choi &mdash; Web Development </h2>
        <div id="menu">
          <ul>
            <li onClick={this.props.changeView}>Work</li>
            <li onClick={this.props.changeView}>Info</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Navbar;
