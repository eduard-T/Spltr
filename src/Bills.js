import React from "react";

const Bills = (props) => {
  return (
    <ul>
      {/* INCLUDE ERROR HANDLING */}
      {props.receipts.map((bill) => {
        return (
          <li key={bill.id}>
            <p>{bill.name}</p>
            <p>${bill.value}</p>
            <button onClick={() => props.delete(bill.id)}>x</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Bills;
