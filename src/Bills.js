import React from "react";

// Map through the array and populate the objects/bills onto the page

const Bills = (props) => {
  return (
    <ul>
      {props.receipts.map((bill) => {
        return (
          <li key={bill.id}>
            <p>{bill.name}</p>
            <p>${bill.value}</p>
            <button className="remove" onClick={() => props.delete(bill.id)}>
              <i className="fas fa-times-circle"></i>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Bills;
