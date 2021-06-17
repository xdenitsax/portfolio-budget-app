import React, { useState } from 'react'
import './LoginPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../../redux/api'
import ReusableInput from '../Register/ReusableInput'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

const LoginPage = ({ history }) => {
  const isLoading = useSelector(state => state.user.isLoading)

  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ username: '', password: '' })

  const handleSubmit = e => {
    e.preventDefault()
    // First validate the form, if there are no errors send a request to register the user.
    const formFields = { username, password }
    let formHasErrors = false
    // For loop validating over object's fields.
    for (const value in formFields) {
      if (!formFields[value].length) {
        setErrors(state => ({ ...state, [value]: ' is required' }))
        formHasErrors = true
      }
    }
    // If there are no errors submit the form.
    if (!formHasErrors) {
      dispatch(loginUser({ userInfo: formFields, history }))
    }
  }

  return (
    <>
      <form className="form-div">
        <ReusableInput
          title="Username"
          name="username"
          type="text"
          value={username}
          setValue={setUsername}
          setErrors={setErrors}
          errors={errors}
        />
        <ReusableInput
          title="Password"
          name="password"
          type="password"
          value={password}
          setValue={setPassword}
          setErrors={setErrors}
          errors={errors}
        />
        {isLoading ? (
          <Loader type="Rings" color="#94ae3f" height={80} width={80} />
        ) : (
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </form>
    </>
  )
}

export default LoginPage
