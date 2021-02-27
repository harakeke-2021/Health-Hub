import React from 'react'
import store from '../store'

function Status () {
  const reduxGlobalState = store.getState().goal

  return (
    <>
      <h1>Here is your current progress</h1>
      <h4> The weight that you were originally{reduxGlobalState.cWeight}</h4>
      <h4> The weight that I want to be {reduxGlobalState.gWeight}</h4>
      <h4> The amount of calories that I would normally consume.{reduxGlobalState.mCalories}</h4>
      <h4> The amount of  {reduxGlobalState.cCalories}</h4>
    </>
  )
}

export default Status
