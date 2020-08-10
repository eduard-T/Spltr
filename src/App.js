import React, { Component } from "react";
import Form from "./Form";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bills: [],
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Spltr</h1>
        <p>Bill Splitting App</p>
        <Form />
      </div>
    );
  }
}

export default App;
