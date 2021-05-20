import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import ReusableInput from './ReusableInput'
const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // const [errors, setErrors] = useState({})

  const handleSubmit = e => {
    e.preventDefault()
  }

  const showTheMessage = e => {
    alert('You are now registered in Expense Tracker')
  }

  console.log('Reusable Input', firstName, lastName, username)
  return (
    <>
      <form className='form-expense-div' onSubmit={handleSubmit}>
        <ReusableInput
          title='First Name'
          id='firstname'
          type='text'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />

        <ReusableInput
          title='Last Name'
          id='lastname'
          type='text'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <ReusableInput
          title='Email address'
          id='email'
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <ReusableInput
          title='Username'
          id='username'
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <ReusableInput
          title='Password'
          id='password'
          type='text'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <ReusableInput
          title='Confirm Password'
          id='confirmPassword'
          type='text'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />

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
