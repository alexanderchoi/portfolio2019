import React, { Component } from "react";
import Work from "./Work.js";

class Navbar extends Component {
  render() {
    return (
      <div>
        <h1>Alex Choi</h1>
        <div id="menu">
          <ul>
            <li>Work</li>
            <li>Archive</li>
            <li>Info</li>
          </ul>
        </div>
        <div id="work">
          <Work />
        </div>
      </div>
    );
  }
}
export default Navbar;
