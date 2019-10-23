import React, {Component} from "react";
import "../App.css";
import Navbar from "./Navbar.js";
import Work from './Work.js';
import Info from './Info.js';

class App extends Component {
  state={
    display: 'work'
  }
  
  render() {
    return (
      <div>
        <Navbar />
        {this.state.display==='work'?<Work/>:<Info/>}
      </div>
    );
  }
}

export default App;
