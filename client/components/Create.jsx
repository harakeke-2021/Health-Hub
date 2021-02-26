import React, { useState } from 'react'

// import { Link } from 'react-router-dom'

function Create (props) {
  const [form, setForm] = useState({
    cWeight: 0,
    gWeight: 0,
    mCalories: 0,
    cCalories: 0
  })
  // my next goal here is to get the useState data to update upon change
  // my next goal after that is to update the global useState values
  function handleSubmit (event) {
    event.preventDefault()
    console.log('The submit button does the thing that I want it to do.')
    console.log(form.cWeight)
    console.log(form.gWeight)
    console.log(form.mCalories)
    console.log(form.cCalories)
  }

  function handleChange (event) {
    console.log(event.target.value)
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
    console.log('cWeight :' + form.cWeight)
    console.log('gWeight :' + form.gWeight)
  }

  return (
    <>
      <h1>Your new journey starts here. please give me your data.</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Current Weight:
        </label>
        <input type="text" id="cWeight" name="cWeight" onChange={handleChange}/>
        <label>
          Weight Goal:
        </label>
        <input type="text" id="gWeight" name="gWeight" onChange={handleChange}/>
        <label>
          Maintainence Calories:
        </label>
        <input type="text" id="mCalories" name="cWeight"/>
        <label>
          Calories On Diet:
        </label>
        <input type="text" id="cCalories" name="cCalories"/>
        <input type="submit" value="Submit"/>
      </form>
    </>
  )
}

export default Create
