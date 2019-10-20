import React, { Component } from "react";
import { directive, directiveLiteral } from "@babel/types";

class Navbar extends Component {
  render() {
    return (
      <div>
        <h1>Alex Choi</h1>
        <div id="menu">
          <ul>
            <li>Work</li>
            <li>About</li>
            <li>Info</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
