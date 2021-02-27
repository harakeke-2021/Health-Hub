import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          Home
        </Link>
        <Link to="/signIn">
            Sign In
        </Link>
        <Link to="/register">
          Register
        </Link>
      </nav>
    </>
  )
}

export default Nav
