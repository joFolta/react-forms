import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { format } from "url";
import Form1 from "./Form.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Form 1</h2>
        <Form1 />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        // </a> */}
      </header>
    </div>
  );
}

export default App;
