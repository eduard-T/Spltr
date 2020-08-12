import React from "react";

const Bills = (props) => {
  return (
    <section>
      {props.bills.map((bill) => {
        return <h3 key={bill.id}>{bill.value}</h3>;
      })}
    </section>
  );
};

export default Bills;
