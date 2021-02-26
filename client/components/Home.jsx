import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <>
      <div className="home">
        <h1>Make A Change Today Lose That Weight</h1>
        <div className="goals">
          <Link to="/create">
          Start On Your Journey
          </Link>
          <Link to="/progress">
          Continue On Your Journey
          </Link>
        </div>
        <div className="homeImages">
          <div className="row">
            <img src='/images/healthy_food.jpeg' />
            <img src='/images/healthy_food2.jpeg' />
            <img src='/images/healthy_food3.jpg' />
            <img src='/images/healthy_food4.jpg' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
