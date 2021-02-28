import React, { useState } from 'react'
import store from '../store'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

function Create () {
  const [form, setForm] = useState({
    cWeight: 0,
    gWeight: 0,
    mCalories: 0,
    cCalories: 0
  })

  const reduxGlobalState = store.getState().goal

  function handleSubmit (event) {
    event.preventDefault()
    const action = {
      type: 'NEW_GOAL',
      goal: {
        cWeight: Number(form.cWeight),
        gWeight: Number(form.gWeight),
        mCalories: Number(form.mCalories),
        cCalories: Number(form.cCalories)
      }
    }
  }

  function handleChange (event) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
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
        <input type="text" id="mCalories" name="mCalories" onChange={handleChange}/>
        <label>
          Calories On Diet:
        </label>
        <input type="text" id="cCalories" name="cCalories" onChange={handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
      <h2>click here to see how much progress you have left.</h2>
      <Link to="/progress">
        Progress
      </Link>
    </>
  )
}


// inside of the W6D2-1 exercise use the AddWombatform as your direct refernece when
// mapping over the functions inside of create.


// function mapDispatchToProps(dispatch) {
//  return {
//    calculategoal: action => dispatch(action)
//  }
//}
//
//
//
//
//
//export default connect(null, mapDispatchToProps)(AddWombatForm)


export default connect()(Create)
