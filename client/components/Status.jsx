import React from 'react'
import { connect } from 'react-redux'

import store from '../store'//replace the getState function.





//Status does not use props or getState.
function Status (props) {

  const { goal } = props

  return (
    <>
      <h4> The weight you should be if you are following a good fat burning diets </h4>

      <h1>Here is your current progress</h1>
      <h4> The weight that you were originally{goal.cWeight}</h4>
      <h4> The weight that I want to be {goal.gWeight}</h4>
      <h4> The amount of calories that I would normally consume.{goal.mCalories}</h4>
      <h4> The amount of  {goal.cCalories}</h4>

    </>
  )
}


function mapStateToProps(state) {
  return {
    goal: state.goal
  }
}


export default connect(mapStateToProps)(Status)