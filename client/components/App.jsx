import React, { useState } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import Create from './Create'
import Status from './Status'
import SignIn from './SignIn'
import Register from './Register'
const App = () => {
  // I will need to use useState.

  // const [cBMI, setcBMI] = useState(18.0)// current Body mass index.
  // const [gBMI, setgBMI] = useState(10.0)// goal body mass index.

  const [cWeight, setCWeight] = useState(62.0) // current weight
  const [gWeight, setGWeight] = useState(62.0) // weight goal

  const [mCalories, setMCalories] = useState(2000) // maintence calories.
  const [cCalories, setCCalories] = useState(2000) // current calories.
  const [daysTillGoal, setDaysTillGoal] = useState(0.0) // days until bmi goal has been meet.

  // for now I will just use the values that I have now but I plan on adding more

  return (
    <Router>
      <Route path='/' component={Nav}/>
      <Route exact path='/' component={Home}/>

      <Route exact path='/create' render={ () => {
        return <Create setCWeight={setCWeight} setGWeight={setGWeight} setMCalories={setMCalories} setCCalories={setCCalories} setDaysTillGoal={setDaysTillGoal}/>
      }} />

      <Route exact path='/progress' render={ () => {
        return <Status cWeight={cWeight} gWeight={gWeight} mCalories={mCalories} cCalories={cCalories} daysTillGoal={daysTillGoal} />
      }} />

      <Route exact path='/signIn' component={SignIn}/>

      <Route exact path='/register' component={Register}/>

    </Router>
  )
}

export default App

// { /* First task. Inside of app I have useState. Define the useState in app from within the component Create. */ }
// { /* Second task. Be able to view the useState data from within progress. */ }
// // complete the data that can be stored
// { /* third task. Now I want to be able to run a calculator function that runs that sets state to a new calculated value. */ }
// { /* fourth task. Create a new file for storing all api functions and let them sleep in there. */ }
// { /* fifth task.  Go back and make sure that the mvp is complete. */ }
// { /* sixth task. Testing is not necessary at this point because all the data is about to be replaced for database functionality. so we will be expecting the functionality of all our api routes and data our calculator function takes in to change once a db gets involved. */ }

// { /* No testing until this point. Now we test */ }
