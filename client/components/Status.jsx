import React from 'react'
// import { Link } from 'react-router-dom'

function Status (props) {
  return (
    <>
      <h1>Here is your current progress</h1>
      <h2>{props.cWeight}</h2>
      <h2>{props.gWeight}</h2>
      <h2>{props.mCalories}</h2>
      <h2>{props.cCalories}</h2>
      <h2>{props.setDaysTillGoal}</h2>
      {/* display props */}
    </>
  )
}

export default Status
