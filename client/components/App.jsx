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

export default App
