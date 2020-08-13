import React, { Component } from "react";

class inputForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      group: "",
      amount: "",
      tip: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form className="tipApp">
        <div>
          <label htmlFor="groupSize">Name </label>
          <input
            onChange={this.handleChange}
            type="text"
            id="groupName"
            value={this.state.name}
            placeholder="Name your group"
            name="name"
          />
        </div>

        <div>
          <label htmlFor="groupSize">How many? </label>
          <input
            onChange={this.handleChange}
            type="number"
            id="groupSize"
            value={this.state.group}
            min="1"
            step="1"
            placeholder="Add the group size"
            name="group"
            required
          />
        </div>

        <div>
          <label htmlFor="billAmount">How much? </label>
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
          <label htmlFor="tipAmount">Tip? </label>
          <input
            onChange={this.handleChange}
            type="number"
            id="tipAmount"
            value={this.state.tip}
            min="10"
            step="5"
            placeholder="Add the tip %"
            name="tip"
          />
        </div>

        <button onClick={(event) => this.props.getTotal(event, this.state)}>
          Split it!
        </button>
      </form>
    );
  }
}

export default inputForm;
