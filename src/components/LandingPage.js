import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from '../redux/api'
import styled from 'styled-components'

// STYLE //

//font-family: 'Montserrat', sans-serif;
//font-family: 'Noto Serif JP', serif;

const Form = styled.div`
  margin-top: 200px;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

const SigninButton = styled.button`
  color: #101321;
  border-radius: 1rem;
  perspective: 300px;
  box-shadow: #c5c5c5 0px 1px 7px -3px, #c5c5c5 0px 1px 3px 0px;
  width: 200px;
  height: 60px;
  background-color: #94ae3f;
  border-style: hidden;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 15px;
`
const ChooseOption = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: light;
`
const RegisterButton = styled.button`
  color: #101321;
  border-radius: 1rem;
  box-shadow: #c5c5c5 0px 1px 7px -3px, #c5c5c5 0px 1px 3px 0px;
  width: 200px;
  height: 60px;
  background-color: #94ae3f;
  border-style: hidden;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 15px;
`
const Wrap = styled.div`
  text-align: center;
  justify-content: center;
`
const GuestButton = styled.button`
  margin-top: 100px;
  color: #566424;
  background-color: #ffffff;
  border: 1px solid #94ae3f;
  box-shadow: #c5c5c5 0px 1px 7px -3px, #c5c5c5 0px 1px 3px 0px;
  width: 200px;
  height: 60px;
  border-radius: 9px;
  font-family: 'Montserrat', sans-serif;
  font-size: 17px;
`

const LandingPage = ({ history }) => {
  //  Initialize dispatch.
  const dispatch = useDispatch()

  return (
    <>
      <Form>
        <Link to="./login">
          <SigninButton>Log in!</SigninButton>
        </Link>
        <ChooseOption>OR</ChooseOption>
        <Link to="./register">
          <RegisterButton>Register an acount!</RegisterButton>
        </Link>
        <Wrap>
          <GuestButton
            onClick={() => dispatch(loginUser({ userInfo: { username: 'guest', password: '12345' }, history }))}
          >
            Guest Account
          </GuestButton>
        </Wrap>
      </Form>
    </>
  )
}

export default LandingPage
