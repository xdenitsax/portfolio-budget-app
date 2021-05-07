import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

const Register = () => {
  const showTheMessage = e => {
    alert('You are now registered in Expense Tracker')
  }
  return (
    <>
      <form className='form-expense-div'>
        <p className='text-expense-first-name'>First name</p>
        <input type='text' className='input-first-name'></input>
        <br />
        <p className='text-expense-last-name'>Last name:</p>
        <input type='text' className='input-last-name'></input>
        <br />
        <p className='email-expense-username'>Email:</p>
        <input type='email' className='input-expense-email'></input>
        <br />
        <p className='text-expense-username'>Username:</p>
        <input type='text' className='input-expense-username'></input>
        <br />
        <p className='password-expense-username'>Password:</p>
        <input type='password' className='input-expense-password'></input>
        <br />
        <p className='confirm-password-expense-username'>Confirm password::</p>
        <input
          type='password'
          className='input-confirm-password-expense-username'
        ></input>
        <br />
        <Link to='./signin'>
          <input
            type='button'
            value='Register!'
            className='button-register'
            onClick={e => showTheMessage(e)}
          ></input>
        </Link>
      </form>
    </>
  )
}

export default Register
