import React, { Component } from "react";

class inputForm extends Component {
  constructor() {
    super();
    // Create a state for each of the form input values
    this.state = {
      name: "",
      group: "",
      amount: "",
      tip: "",
    };
  }

  // Create a method to watch and set the state with the value of whatever field the user is in
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // Create a method to set the states for the form values back to empty strings on button click
  clearForm = (event) => {
    event.preventDefault();

    this.setState({
      name: "",
      group: "",
      amount: "",
      tip: "",
    });
  };

  // Populate the page
  render() {
    return (
      <form>
        <div className="tipApp">
          <div>
            <label htmlFor="groupName">
              <i className="icon fas fa-id-card"></i>Group Name?
            </label>
            <input
              // Watch for a change and value input
              onChange={this.handleChange}
              type="text"
              id="groupName"
              value={this.state.name}
              maxLength="15"
              placeholder="Name your group"
              name="name"
            />
          </div>

          <div>
            <label htmlFor="groupSize">
              <i className="icon fas fa-users"></i>How many?
            </label>
            <input
              // Watch for a change and value input
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
            <label htmlFor="billAmount">
              <i className="icon fas fa-receipt"></i>How much?
            </label>
            <input
              // Watch for a change and value input
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
            <label htmlFor="tipAmount">
              <i className="heart fas fa-heart"></i>Tip?
            </label>
            <input
              // Watch for a change and value input
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
        </div>

        <button
          type="reset"
          className="formButton clear"
          onClick={this.clearForm}
        >
          Reset
        </button>

        <button
          type="submit"
          className="formButton submit"
          // Pass the users provided data to the main component on button click
          onClick={(event) => this.props.getTotal(event, this.state)}
        >
          Split it!
        </button>
      </form>
    );
  }
}

export default inputForm;
