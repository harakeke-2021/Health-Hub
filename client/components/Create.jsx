import React, { useState } from 'react'
import store from '../store'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Create (props) {

  const [form, setForm] = useState({
    cWeight: 0,
    gWeight: 0,
    mCalories: 0,
    cCalories: 0,
    startDate: null
  })

  function handleChange (event) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }
  
  function handleSubmit (event) {
    event.preventDefault()
    const caloriesin1kgfat = 9000
    const weighttoloseinkg = Number(form.cWeight) - Number(form.gWeight)
    const caloriestolose = caloriesin1kgfat * weighttoloseinkg
    const calorieslostdaily = Number(form.mCalories) - Number(form.cCalories)
    const daystillgoal = caloriestolose / calorieslostdaily
    console.log(daystillgoal)
    const action = {
      type: 'NEW_GOAL',
      goal: {
        cWeight: Number(form.cWeight),
        gWeight: Number(form.gWeight),
        mCalories: Number(form.mCalories),
        cCalories: Number(form.cCalories),
        weightToLose: weighttoloseinkg,
        caloriestolose: caloriestolose,
        daystillgoal: daystillgoal,
        startDate: new Date()
      }
    }
    props.dispatch(action)
  }
  
  return (
    <>
      <h1>Your new journey to good health starts here. please give me your data.</h1>
    <div className = "form">
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
      </div>
      <div className="bodyLink">
      <h2>click here to see how much progress you have left.</h2>
      <Link to="/progress">
        Progress
      </Link>
      </div>
    </>
  )
}



function mapStateToProps(state) {
 return {
   goal: state.goal
 }
}


export default connect(mapStateToProps)(Create)