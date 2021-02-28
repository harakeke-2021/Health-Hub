import React, { useState } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import Create from './Create'
import Status from './Status'
import SignIn from './SignIn'
import Register from './Register'
const App = () => {
  return (
    <Router>
      <Route path='/' component={Nav}/>
      <Route exact path='/' component={Home}/>

      <Route exact path='/create' component={Create}/>

      <Route exact path='/progress' component={Status}/>  

      <Route exact path='/signIn' component={SignIn}/>

      <Route exact path='/register' component={Register}/>

    </Router>
  )
}

{/* although I am expecting the components to house props. I am mapping state to props from inside of the component
which is why there is zero mention of that inside of app */}


// I will need to look inside of the W6D2 exercise for better reference. when I am looking inside of those files
// I will need to see if there is by any chance any difference with how components that extend other react components
// function compared tojust the usual react components.
export default App
