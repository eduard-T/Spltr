import React from "react"
import { removeBill } from "./dbClient"


const Bills = ({ receipts }) => {
  return (
    <ul>
      {receipts?.map((bill) => {
        return (
          <li key={bill.id}>
            <p>{bill.name}</p>
            <p>${bill.value}</p>
            <button
              className="remove"
              onClick={() => removeBill(bill.id)}
            >
              <i className="fas fa-times-circle"></i>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default Bills
