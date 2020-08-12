import React, { Component } from "react";
import Form from "./Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bills: [],
    };
  }

  render() {
    return (
      <div className="wrapper">
        <h1 className="logoName">Spl|tr</h1>
        <p>Bill Splitting App</p>
        <Form />
      </div>
    );
  }
}

export default App;
