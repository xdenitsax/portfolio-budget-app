import React, { useState } from 'react'
import ReusableInput from './ReusableInput'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/api'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'

// STYLE//
const Form = styled.form`
  text-align: center;
  margin-top: 50px;
`

const RegisterButton = styled.button`
  border-radius: 1rem;
  font-family: 'Montserrat', sans-serif;
  color: #1f1d08;
  perspective: 300px;
  box-shadow: 15px 22px 45px rgba(0, 0, 0, 0.055);
  width: 150px;
  height: 45px;
  background-color: #94ae3f;
  border-style: hidden;
  border-radius: 5px;
  font-size: 17px;
  margin-top: 50px;
  margin-bottom: 20px;
`
const Register = ({ history }) => {
  // Redux state.
  const isLoading = useSelector(state => state.user.isLoading)

  // Local state.
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({ firstName: '', lastName: '', username: '', password: '', confirmPassword: '' })

  // Initialize dispatch.
  const dispatch = useDispatch()

  // Form submission and validation.
  const handleSubmit = e => {
    e.preventDefault()
    // First validate the form, if there are no errors send a request to register the user.
    const formFields = { firstName, lastName, username, password, confirmPassword }
    let formHasErrors = false
    // For loop validating over object's fields.
    for (const value in formFields) {
      if (!formFields[value].match(/^[A-Za-z0-9]+$/) || formFields[value].match(/\s/g)) {
        setErrors(state => ({ ...state, [value]: ' must not have special characters or blank spaces' }))
        formHasErrors = true
      }
      if (formFields[value].length < 3) {
        setErrors(state => ({ ...state, [value]: ' must be at least 3 characters long' }))
        formHasErrors = true
      }
      if (formFields[value].length > 20) {
        setErrors(state => ({ ...state, [value]: ' must be less than 20 characters long' }))
        formHasErrors = true
      }
      if (value === 'confirmPassword' && confirmPassword !== password) {
        setErrors(state => ({ ...state, [value]: ' does not match password' }))
        formHasErrors = true
      }
    }
    // If there are no errors submit the form.
    if (!formHasErrors) {
      dispatch(registerUser({ userInfo: formFields, history: history }))
    }
  }

  return (
    <>
      <Form>
        <ReusableInput
          title="First Name"
          name="firstName"
          type="text"
          value={firstName}
          setValue={setFirstName}
          setErrors={setErrors}
          errors={errors}
        />
        <ReusableInput
          title="Last Name"
          name="lastName"
          type="text"
          value={lastName}
          setValue={setLastName}
          setErrors={setErrors}
          errors={errors}
        />
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
        <ReusableInput
          title="Confirm Password"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          setErrors={setErrors}
          errors={errors}
        />
        {isLoading ? (
          <Loader type="Rings" color="#94ae3f" height={80} width={80} />
        ) : (
          <RegisterButton onClick={handleSubmit}>Register</RegisterButton>
        )}
      </Form>
    </>
  )
}

export default Register
