import React from 'react'
import { Link } from 'react-router-dom'
// import {} from // import external functions

function Nav () {
  return (
    <>
      <nav className="navbar">
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

// try and link up a style sheet. In the next commit
