import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import ReusableInput from './ReusableInput'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../../../redux/actions/usersHandle'

const Register = () => {
  const dispatch = useDispatch()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  // const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showMessage, setShowMessage] = useState(true)
  // const [errors, setErrors] = useState({
  //   errorFirstName: 'First name must be filed!',
  //   errorLastName: 'Last name must be filed!',
  //   // errorEmail: 'Email must be filed!',
  //   errorUsername: 'Username must be filed and at least 6 symbols!',
  //   errorPassword:
  //     'Password must be at least 10 characters, and needs at least 3 of the following: uppercase, lowercase, numeric, or special characters.  The allowed special characters are ~ ! @ # $ % ^ * - _ = + [ { ] } / ; : , . ?  [no spaces allowed!',
  //   errorConfirmPassword: 'Ooops... password don`t match!',
  // })

  const handleSubmit = e => {
    e.preventDefault()
    // setErrors([...errors], errors.next())
    setShowMessage(false)
    dispatch(createUser(firstName, lastName, username, password))
  }
  // console.log(errors)
  //REDUX STATE //
  const user = useSelector(state => state.createUser)
  console.log(user)
  return (
    <>
      <form className='form-expense-div'>
        <ReusableInput
          title='First Name'
          id='firstname'
          type='text'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        {/* <div>
          {firstName.length <= 3 ? <p>{errors.errorFirstName}</p> : showMessage}
        </div> */}
        <ReusableInput
          title='Last Name'
          id='lastname'
          type='text'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        {/* <div>
          {lastName.length <= 3 ? <p>{errors.errorLastName}</p> : showMessage}
        </div> */}
        {/* <ReusableInput
          title='Email address'
          id='email'
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <div>
          {email.length <= 3 ? <p>{errors.errorEmail}</p> : showMessage}
        </div> */}
        <ReusableInput
          title='Username'
          id='username'
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        {/* <div>
          {username.length <= 6 ? <p>{errors.errorUsername}</p> : showMessage}
        </div> */}
        <ReusableInput
          title='Password'
          id='password'
          type='text'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {/* <div>
          {password.length <= 10 ? <p>{errors.errorPassword}</p> : showMessage}
        </div> */}
        <ReusableInput
          title='Confirm Password'
          id='confirmPassword'
          type='text'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        {/* <div>
          {password === confirmPassword ? (
            <p>{errors.errorConfirmPassword}</p>
          ) : (
            showMessage
          )}
        </div> */}
        <br />
        <Link to='./signin'>
          <input
            type='button'
            value='Register!'
            className='button-register'
            onClick={e => handleSubmit(e)}
          ></input>
        </Link>
      </form>
    </>
  )
}

export default Register
