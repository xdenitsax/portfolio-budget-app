import React from 'react'
import './FirstPage.css'
const FirstPage = () => {
  return (
    <>
      <div className='form-firstPage'>
        <form>
          <input
            type='button'
            value='SIGN IN!'
            className='button-signin-page'
          ></input>
          <p className='or-firstPage'>OR</p>
          <input
            type='button'
            value='REGISTER AN ACOUNT!'
            className='button-register-page'
          ></input>
        </form>
      </div>
    </>
  )
}

export default FirstPage
