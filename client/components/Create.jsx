import React, { useState } from 'react'
import store from '../store'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ProgressPlugin } from 'webpack'
// import { Link } from 'react-router-dom'

function Create (props) {
  

  // component state.

  const [form, setForm] = useState({
    cWeight: 0,
    gWeight: 0,
    mCalories: 0,
    cCalories: 0
  })

  function handleChange (event) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }
  
  // On submit new data is being added to our form
  function handleSubmit (event) {
    event.preventDefault()
    const action = {
      type: 'NEW_GOAL',
      goal: {
        cWeight: Number(form.cWeight),
        gWeight: Number(form.gWeight),
        mCalories: Number(form.mCalories),
        cCalories: Number(form.cCalories),
      }
    }
    this.form.store.dispatch(action),
    this.setForm({
    cWeight: 0,
    gWeight: 0,
    mCalories: 0,
    cCalories: 0
    }) 
    // I have already defined the action.
    // now I need to dispatch the action
    // I also need to ontop of 
  }
  
  //this is a big no no. find a work around.
  const reduxGlobalState = store.getState().goal
  
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


function mapStateToProps(state) {
 return {
   goal: state.goal
 }
}

export default connect(mapStateToProps)(Create)
// ok what more do I have to do to get this up and running .