import React from 'react'
import { Link } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import styled from 'styled-components'

const ContainerSupport = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
`
const HeaderText = styled.h1`
  font-size: 20px;
  font-weight: bolder;
  color: #688801;
  margin-bottom: 20px;
  text-align: center;
`
const HeaderParagrpah = styled.p`
  font-size: 14px;
  text-align: center;
  @media (max-width: 879px) {
    font-size: 12px;
  }
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin-top: 40px;
`

const FormHeader = styled.h1`
  font-size: 20px;
  font-weight: bolder;
  color: #688801;
  margin-bottom: 20px;
  text-align: center;
`
const FormParagraph = styled.p`
  justify-content: center;
  font-family: 'Raleway', sans-serif;
  padding: 5px;
`

const FormInput = styled.input`
align-items: center;
width: 25vh;
box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.082);
font-family: 'Raleway', sans-serif;
background-color: #dbded9;
height: 40px;
border-style: hidden;
border-radius: 5px;
font-size: 14px;
margin-top: 10px;
margin-bottom: 5px;
padding: 0 5px;
&:focus {
  outline: none;

  width: 200px;
`
const FormInputMessage = styled.input`
  height: 200px;
  width: 300px;
  margin-top: 10px;
  text-align: start;
  align-items: center;
  box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.082);
  font-family: 'Raleway', sans-serif;
  background-color: #dbded9;
  border-style: hidden;
  border-radius: 5px;
  font-size: 14px;

  padding: 0 5px;
  &:focus {
    outline: none;
  }
  @media (max-width: 460px) {
    height: 150px;
    width: 250px;
  }
`

const ButtonSend = styled.button`
  margin-top: 60px;
  color: #101321;
  border-radius: 1rem;
  box-shadow: 15px 19px 45px rgba(0, 0, 0, 0.166);
  width: 180px;
  height: 50px;
  background-color: #94ae3f;
  border-style: hidden;
  border-radius: 5px;
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
`
const ButtonBack = styled.button`
  margin-top: 20px;
  color: #101321;
  border-radius: 1rem;
  box-shadow: 15px 19px 45px rgba(0, 0, 0, 0.166);
  width: 130px;
  height: 50px;
  background-color: #94ae3f;
  border-style: hidden;
  border-radius: 5px;
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
`

const Support = () => {
  return (
    <>
      <NavigationBar />
      <ContainerSupport>
        <HeaderText>We would love to hear from you</HeaderText>
        <HeaderParagrpah>
          Whether you have a question about features or anything else, our team is ready to answer all you questions.
        </HeaderParagrpah>
        <FormContainer>
          <FormHeader>Ger in touch with us</FormHeader>
          <FormParagraph> Your name:</FormParagraph>
          <FormInput type="text" />
          <FormParagraph>Your email:</FormParagraph>
          <FormInput type="text" />
          <FormParagraph>Your message</FormParagraph>
          <FormInputMessage type="text" />
          <ButtonSend>Send</ButtonSend>
          <Link to="/">
            <ButtonBack>Go Back</ButtonBack>
          </Link>
        </FormContainer>
      </ContainerSupport>
    </>
  )
}

export default Support
