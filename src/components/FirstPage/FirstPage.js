import React from 'react'
import { Link } from 'react-router-dom'

import './FirstPage.css'
const FirstPage = () => {
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

export default FirstPage
