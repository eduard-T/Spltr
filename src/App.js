import React, { Component } from "react";
import firebase from "./firebase";
import Form from "./Form";
import Bills from "./Bills";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bills: [],
      total: 0,
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    // Event listener that watches the database
    dbRef.on("value", (snapshot) => {
      const firebaseData = snapshot.val();

      const billData = [];

      for (const bill in firebaseData) {
        billData.push({
          id: bill,
          value: firebaseData[bill],
        });
      }
      this.setState({
        bills: billData,
      });
    });
  }

  handleClick = (event, billInfo) => {
    event.preventDefault();
    console.log(billInfo.total);
    const dbRef = firebase.database().ref();

    const result = (billInfo.amount / billInfo.group) * billInfo.tip;
    dbRef.push(result.toFixed(2));

    this.setState({
      total: result.toFixed(2),
    });
  };

  render() {
    return (
      <div className="wrapper">
        <h1 className="logoName">Spl|tr</h1>
        <p>Bill Splitting App</p>

        <Form getTotal={this.handleClick} />
        {this.state.total}
        <Bills bills={this.state.bills} />
      </div>
    );
  }
}

export default App;
