import React from "react";
import "../App.css";
import Navbar from "./Navbar.js";
import Info from "./Info.js";
import Work from './Work.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Info />
      <Work />
    </div>
  );
}

export default App;
