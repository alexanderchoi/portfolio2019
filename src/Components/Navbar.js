import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <h1>Alex Choi</h1>
        <div id="menu">
          <ul>
            <li><a href="#work">Work</a></li>
            <li><a href="#archive">Archive</a></li>
            <li><a href="#info">Info</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Navbar;
