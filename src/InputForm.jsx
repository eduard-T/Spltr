import React, { useState } from "react"

const InputForm = ({ getTotal }) => {
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    amount: "",
    tip: ""
  })

  // Create a method to watch and set the state with the value of whatever field the user is in
  const handleChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  // Create a method to set the states for the form values back to empty strings on button click
  const clearForm = (event) => {
    event.preventDefault()

    setFormState({
      location: "",
      size: "",
      amount: "",
      tip: ""
    })
  }

  const onSubmit = (event) => {
    clearForm(event)
    getTotal(event, formState)
  }

  // Populate the page
  return (
    <form>
      <div className="tipApp">
        <div className="inputContainer">
          <label htmlFor="location">
            Location<i className="icon fas fa-map-marked"></i>
          </label>
          <input
            id="location"
            onChange={handleChange}
            type="text"
            value={formState.location}
            maxLength="32"
            placeholder="Where did the bill come from?"
            name="location"
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="partySize">
            Party Size<i className="icon fas fa-users"></i>
          </label>
          <input
            id="partySize"
            onChange={handleChange}
            type="number"
            value={formState.size}
            min="1"
            step="1"
            placeholder="How many ways is it being split?"
            name="size"
            required
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="billAmount">
            Total<i className="icon fas fa-receipt"></i>
          </label>
          <input
            id="billAmount"
            onChange={handleChange}
            type="number"
            value={formState.amount}
            min="0"
            step="10"
            placeholder="What is the total?"
            name="amount"
            required
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="tipAmount">
            Tip<i className="heart fas fa-heart"></i>
          </label>
          <input
            id="tipAmount"
            onChange={handleChange}
            type="number"
            value={formState.tip}
            min="0"
            step="5"
            placeholder="What is the tip percentage?"
            name="tip"
          />
        </div>
      </div>

      <div className="buttonContainer">
        <button
          type="submit"
          className="formButton submit"
          // Pass the users provided data to the main component on button click
          onClick={onSubmit}
        >
          Split it!
        </button>
      </div>
    </form>
  )
}

export default InputForm
