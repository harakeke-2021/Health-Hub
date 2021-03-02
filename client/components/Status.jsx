import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import store from '../store'//replace the getState function.

function Status (props) {

  const { goal } = props

  const daystomiliseconds = 1000 * 60 * 60 * 24
  const goaldiff = goal.daystillgoal * daystomiliseconds
  
  const currentDate = new Date()
  const currentdiff = currentDate - goal.startDate

  const percentagewithdecimal = currentdiff / goaldiff * 100
  const percentage = Math.round(percentagewithdecimal * 100) / 100

  return (
    <>
      <h4> The weight you should be if you are following a good fat burning diets </h4>
      <h1>Here is your current progress</h1>
      <h4> The weight that I want to be {goal.gWeight} kg from {goal.cWeight} kg</h4>
      <h4> You are trying to burn off {goal.caloriestolose} calories in {goal.daystillgoal} days</h4>
      <h4> How far I have gotten with my progress. {percentage}% </h4>
      <Link to="/create">
        Want to reset goal.
      </Link>
      
    </>
  )
}


function mapStateToProps(state) {
  return {
    goal: state.goal
  }
}


export default connect(mapStateToProps)(Status)