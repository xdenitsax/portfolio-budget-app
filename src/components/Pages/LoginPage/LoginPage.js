import React from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'

const LoginPage = () => {
  const submitButton = e => {
    e.preventDefault(e)
  }
  return (
    <>
      <form className='form-div'>
        <p className='text-username'>Username:</p>
        <input type='text' className='input-username'></input>
        <br />
        <p className='text-password'>Password:</p>
        <input type='password' className='input-password'></input>
        <br />
        <Link to='/add-transaction'>
          <input
            type='button'
            value='Sumbit'
            className='input-button'
            onChange={e => submitButton(e)}
          ></input>
        </Link>
      </form>
    </>
  )
}

export default LoginPage
