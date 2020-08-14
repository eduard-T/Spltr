import React, { Component } from "react";
import firebase from "./firebase";
import Form from "./Form";
import Bills from "./Bills";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // Create a state for the bill array that will hold the bill objects
      bills: [],
      // Create a state for the total amount per person
      total: 0,
    };
  }

  // Wait for the document
  componentDidMount() {
    const dbRef = firebase.database().ref();

    // Event listener that watches the database
    dbRef.on("value", (snapshot) => {
      const firebaseData = snapshot.val();

      // Create an array to update the bill state
      const billData = [];

      // Push the users data into the billData array
      for (const bill in firebaseData) {
        billData.push({
          id: bill,
          name: firebaseData[bill].name,
          value: firebaseData[bill].result,
        });
      }

      // Set the state with the array filled with the users data
      this.setState({
        bills: billData,
      });
    });
  }

  // Create a method to attach to button click
  handleClick = (event, billInfo) => {
    event.preventDefault();

    // Call the database
    const dbRef = firebase.database().ref();

    // Run an equation to get the total amount per person with the data provided by the user
    const result =
      (billInfo.amount / billInfo.group) * (billInfo.tip / 100 + 1);

    // If the required fields are empty or the total is NaN, display an alert, else display the result and push the total to the state an database
    if (result) {
      dbRef.push({
        result: result.toFixed(2),
        name: billInfo.name,
      });
      this.setState({
        total: result.toFixed(2),
      });
    } else {
      alert("Please fill all forms!");
    }
  };

  // Create a method to remove previous objects from the database
  deleteBill = (billId) => {
    const dbRef = firebase.database().ref();

    dbRef.child(billId).remove();
  };

  // Populate the page
  render() {
    return (
      <div className="wrapper">
        <h1 className="logoName">Spl|tr</h1>
        <h3>Bill Splitting App</h3>

        <Form getTotal={this.handleClick} />
        <h2>${this.state.total}</h2>

        <h3 className="dataHeader">
          <span>Previous Bills</span>
        </h3>
        <Bills receipts={this.state.bills} delete={this.deleteBill} />
      </div>
    );
  }
}

export default App;
