import React, { Component } from "react";
// import firebase from "./firebase";

class inputForm extends Component {
  componentDidMount() {
    // const dbRef = firebase.database().ref();
    // dbRef.on("value", (snapshot) => {
    //   const data = snapshot.val();
    //   console.log(snapshot.val());
    // });
  }

  render() {
    return (
      <form action="submit" method="post">
        <input type="text" name="" id="" />
        <label htmlFor=""></label>
        <input type="text" name="" id="" />
        <label htmlFor=""></label>
        <input type="range" name="" id="" />
      </form>
    );
  }
}

export default inputForm;
