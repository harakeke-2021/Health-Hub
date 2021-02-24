import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'

const App = () => {
  return (
    <Router>
      <Route path='/' component={Nav}/>
      <Route exact path='/' component={Home}/>
    </Router>
  )
}

export default App
