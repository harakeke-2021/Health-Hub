import React from 'react'
import { Link } from 'react-router-dom'
// import {} from // import external functions

function Nav () {
  return (
    <>
      <div >
        <nav className="navbar">
          <Link to="/Sign_In">
            Sign In
          </Link>

          <Link to="/Register">
          Register
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Nav

// try and link up a style sheet. In the next commit
