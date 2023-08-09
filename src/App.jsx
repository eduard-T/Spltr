import React, { useState, useEffect, useRef } from "react"
import { onValue } from "firebase/database"
import { addBill, dbRef } from "./dbClient"
import InputForm from "./InputForm"
import Bills from "./Bills"

function App() {
  const resultRef = useRef(null)
  const [bills, setBills] = useState([])
  const [total, setTotal] = useState(0)
  const [splitTotal, setSplitTotal] = useState(0)

  // Wait for the document
  useEffect(() => {
    // Event listener that watches the database
    onValue(dbRef, (snapshot) => {
      const firebaseData = snapshot.val()

      // Create an array to hold the bill data
      const billData = []

      // Loop over & push the users' data into the billData array
      for (const bill in firebaseData) {
        billData.push({
          id: bill,
          name: firebaseData[bill].name,
          value: firebaseData[bill].result,
        })
      }

      // Set the state with the array filled with the users data
      setBills(billData)
    })
  }, [])

  // Create a method to attach to button click
  const handleClick = (event, billInfo) => {
    event.preventDefault()

    const { location, amount, size, tip } = billInfo

    // Get the total & split total amount per person with the data provided by the user
    const grandTotal = (amount * (tip / 100 + 1)).toFixed(2)
    const splitAmount = ((amount / size) * (tip / 100 + 1)).toFixed(2)

    // If the required fields are empty or the total is NaN, display an alert, else display the result and push the total to the database
    if (grandTotal > 0) {
      addBill({
        result: splitAmount,
        name: location,
      })

      // Set the states
      setTotal(grandTotal)
      setSplitTotal(splitAmount)

      // With a delay for the DOM, scroll to the result
      setTimeout(() => {
        resultRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        })
      }, 100)

    } else {
      alert("This bill cannot exist!")
    }
  }

  // Populate the page
  return (
    <div className="wrapper">
      <div className="formContainer">
        <h1 className="logoName">Spl|tr</h1>
        <h3>Bill Splitting App</h3>

        <InputForm getTotal={handleClick} />
      </div>
      
      {total > 0 && splitTotal > 0 && (
        <div className="totalContainer" ref={resultRef}>
          <p>Each person owes:</p>
          <p>${splitTotal}</p>
        </div>
      )}

      {bills.length !== 0 && (
        <>
          <h3 className="dataHeader">
            <span>Previous Bills</span>
          </h3>
          <Bills receipts={bills} />
        </>
      )}
    </div>
  )
}

export default App
