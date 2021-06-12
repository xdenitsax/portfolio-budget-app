import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../../redux/actions/usersHandle'

const LoginPage = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(loginUser(username, password))
  }

  const userLogin = useSelector(state => state.loginUser)
  console.log(userLogin)
  return (
    <>
      <form className='form-div'>
        <p
          className='text-username'
          value={username}
          onChange={event => setUsername(event.target.value)}
        >
          Username:
        </p>
        <input type='text' className='input-username'></input>
        <br />
        <p className='text-password'>Password:</p>
        <input
          type='password'
          className='input-password'
          value={password}
          onChange={event => setPassword(event.target.value)}
        ></input>
        <br />
        <Link to='/add-transaction'>
          <input
            type='button'
            value='Sumbit'
            className='input-button'
            onChange={event => handleSubmit(event)}
          ></input>
        </Link>
      </form>
    </>
  )
}

export default LoginPage
