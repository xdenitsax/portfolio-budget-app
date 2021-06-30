import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/api'
import ReusableInput from './ReusableInput'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'

const Form = styled.form`
  text-align: center;
  margin-top: 200px;
`

const ErroeMessage = styled.p``
const SubmitButton = styled.button`
  border-radius: 1rem;
  color: #101321;
  perspective: 300px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);
  width: 150px;
  height: 50px;
  background-color: #94ae3f;
  border-style: hidden;
  border-radius: 5px;
  font-family: 'Raleway', sans-serif;
  font-size: 17px;
  margin-top: 10px;
  margin-bottom: 20px;
`

const LoginPage = ({ history }) => {
  const isLoading = useSelector(state => state.user.isLoading)
  const errorMessage = useSelector(state => state.user.errorMessage)

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
      <Form>
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
        {errorMessage ? <ErroeMessage>{errorMessage}</ErroeMessage> : null}
        {isLoading ? (
          <Loader type="Rings" color="#94ae3f" height={80} width={80} />
        ) : (
          <SubmitButton onClick={handleSubmit}>Log in</SubmitButton>
        )}
      </Form>
    </>
  )
}

export default LoginPage
