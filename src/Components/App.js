import React, { Component } from "react";
import "../App.css";
import Navbar from "./Navbar.js";
import Work from "./Work/Work.js";
import Info from "./Info/Info.js";

class App extends Component {
  state = {
    display: "Work"
  };

  changeView = e => {
    this.setState({
      display: e.target.innerText
    });
  };

  render() {
    return (
      <div className="wrapper-grid">
        <Navbar changeView={this.changeView.bind(this)} />
        {this.state.display === "Work" ? <Work /> : <Info />}
      </div>
    );
  }
}

export default App;
