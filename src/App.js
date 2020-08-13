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
        console.log(firebaseData[bill]);
        billData.push({
          id: bill,
          name: firebaseData[bill].name,
          value: firebaseData[bill].result,
        });
      }
      this.setState({
        bills: billData,
      });
    });
  }

  handleClick = (event, billInfo) => {
    event.preventDefault();
    console.log(billInfo);
    const dbRef = firebase.database().ref();

    const result =
      (billInfo.amount / billInfo.group) * (billInfo.tip / 100 + 1);
    // dbRef.push(result.toFixed(2));
    dbRef.push({
      result: result.toFixed(2),
      name: billInfo.name,
    });

    this.setState({
      total: result.toFixed(2),
    });
  };

  deleteBill = (billId) => {
    const dbRef = firebase.database().ref();

    dbRef.child(billId).remove();
  };

  render() {
    return (
      <div className="wrapper">
        <h1 className="logoName">Spl|tr</h1>
        <h3>Bill Splitting App</h3>

        <Form getTotal={this.handleClick} />
        <h2>${this.state.total}</h2>

        <h3>Previous Bills</h3>
        <Bills receipts={this.state.bills} delete={this.deleteBill} />
      </div>
    );
  }
}

export default App;
