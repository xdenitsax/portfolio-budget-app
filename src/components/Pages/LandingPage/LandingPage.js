import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from '../../../redux/api'

import './LandingPage.css'

const LandingPage = ({ history }) => {
  //  Initialize dispatch.
  const dispatch = useDispatch()

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
          <input
            type="button"
            value="GUEST ACCOUNT!"
            className="button-guest-account"
            onClick={() => dispatch(loginUser({ userInfo: { username: 'guest', password: '12345' }, history }))}
          ></input>
        </form>
      </div>
    </>
  )
}

export default LandingPage
