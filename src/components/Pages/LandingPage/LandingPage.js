import React from 'react'
import { Link } from 'react-router-dom'

import './LandingPage.css'
const LandingPage = () => {
  return (
    <>
      <div className='form-firstPage'>
        <form>
          <Link to='./signin'>
            <input
              type='button'
              value='SIGN IN!'
              className='button-signin-page'
            ></input>
          </Link>
          <p className='or-firstPage'>OR</p>
          <Link to='./register'>
            <input
              type='button'
              value='REGISTER AN ACOUNT!'
              className='button-register-page'
            ></input>
          </Link>
        </form>
      </div>
    </>
  )
}

export default LandingPage
