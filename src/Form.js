import React, { Component } from "react";
// import firebase from "./firebase";

class inputForm extends Component {
  constructor() {
    super();
    this.state = {
      group: "",
      amount: "",
      tip: 1.1,
      total: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  getUserInput = (event) => {
    event.preventDefault();

    const result = (this.state.amount / this.state.group) * this.state.tip;

    this.setState({
      total: result.toFixed(2),
    });
  };

  render() {
    return (
      <form className="tipApp" action="submit" method="post">
        <div>
          <label htmlFor="groupSize">How many?</label>
          <input
            onChange={this.handleChange}
            type="number"
            id="groupSize"
            value={this.state.group}
            min="1"
            step="1"
            placeholder="Add the number of people"
            name="group"
            required
          />
        </div>

        <div>
          <label htmlFor="billAmount">How much?</label>
          <input
            onChange={this.handleChange}
            type="number"
            id="billAmount"
            value={this.state.amount}
            min="0"
            step=".01"
            placeholder="Add the bill total"
            name="amount"
            required
          />
        </div>

        <div>
          <label htmlFor="tipAmount">Tip?</label>
          <input
            onChange={this.handleChange}
            type="range"
            id="tipAmount"
            value={this.state.tip}
            min="1.1"
            max="1.5"
            step="0.05"
            name="tip"
          />
        </div>

        <button onClick={this.getUserInput}>Calculate</button>

        <h3>{this.state.total}</h3>
      </form>
    );
  }
}

export default inputForm;
