import React from 'react'
import { Link } from 'react-router-dom'
import NavigationBar from '../../NavigationBar/NavigationBar'

import './LandingPage.css'
const LandingPage = () => {
  return (
    <>
      <div className="form-firstPage">
        <form>
          <Link to="./login">
            <input type="button" value="SIGN IN!" className="button-signin-page"></input>
          </Link>
          <p className="or-firstPage">OR</p>
          <Link to="./register">
            <input type="button" value="REGISTER AN ACOUNT!" className="button-register-page"></input>
          </Link>
          <br />
          <Link to="./home">
            <input type="button" value="GUEST ACCOUNT!" className="button-guest-account"></input>
          </Link>
        </form>
      </div>
    </>
  )
}

export default LandingPage
