import React from 'react'
import NavigationBar from '../../NavigationBar/NavigationBar'
import { Link } from 'react-router-dom'
import './About.css'
const About = () => {
  return (
    <>
      <NavigationBar />
      <div className="background-about">
        <div className="image">
          <img className="image-girl" src="./girl-saving.jpg"></img>
        </div>
        <div className="text-div">
          <p className="text">
            Expense Tracker was founded on a simple, powerful idea: modern family life is hard enough. There has to be a
            better way. And that is how we live and work every day. How can we make life easier — for everyone? From
            employees, partners and customers we want to use technology, built for the way we live and work now, to make
            life easier. This makes for happy customers, happy children, happy workers and overall, a better way to
            live.
          </p>
        </div>
      </div>

      <div className="div-button">
        <Link to="/">
          {' '}
          <button className="button">Go Back</button>
        </Link>
      </div>
    </>
  )
}

export default About
