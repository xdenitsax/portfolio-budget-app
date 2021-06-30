import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from '../redux/api'
import styled from 'styled-components'

// STYLE //

const Form = styled.form`
  margin-top: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
`

const SigninButton = styled.input`
  color: #101321;
  border-radius: 1rem;
  perspective: 300px;
  box-shadow: 15px 19px 45px rgba(0, 0, 0, 0.166);
  width: 200px;
  height: 60px;
  background-color: #94ae3f;
  border-style: hidden;
  border-radius: 5px;
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 15px;
`
const ChooseOption = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  font-weight: light;
`
const RegisterButton = styled.input`
  color: #101321;
  border-radius: 1rem;
  perspective: 300px;
  box-shadow: 15px 19px 45px rgba(0, 0, 0, 0.166);
  width: 200px;
  height: 60px;
  background-color: #94ae3f;
  border-style: hidden;
  border-radius: 5px;
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 15px;
`
const GuestButton = styled.input`
  margin-top: 200px;
  background-color: #2437543f;
  color: #101321;
  border-radius: 1rem;
  perspective: 300px;
  box-shadow: 15px 19px 45px rgba(0, 0, 0, 0.166);
  width: 200px;
  height: 60px;
  border-style: hidden;
  border-radius: 5px;
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  margin-top: 60px;
`

const LandingPage = ({ history }) => {
  //  Initialize dispatch.
  const dispatch = useDispatch()

  return (
    <>
      <Form>
        <form>
          <Link to="./login">
            <SigninButton type="button" value="Log in!" />
          </Link>
          <ChooseOption>OR</ChooseOption>
          <Link to="./register">
            <RegisterButton type="button" value="Register an acount!" />
          </Link>
          <br />
          <GuestButton
            type="button"
            value="Guest Account"
            onClick={() => dispatch(loginUser({ userInfo: { username: 'guest', password: '12345' }, history }))}
          />
        </form>
      </Form>
    </>
  )
}

export default LandingPage
