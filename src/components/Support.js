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
  font-family: 'Montserrat', sans-serif;
  @media (max-width: 425px) {
    font-size: 18px;
  }
`
const HeaderParagrpah = styled.p`
  font-size: 14px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
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
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 425px) {
    font-size: 16px;
  }
`
const FormParagraph = styled.p`
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  padding: 5px;

  @media (max-width: 425px) {
    font-size: 14px;
  }
`

const FormInput = styled.input`
  align-items: center;
  width: 25vh;
  box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.082);
  box-shadow: #c5c5c5 0px 1px 7px -3px, #c5c5c5 0px 1px 3px 0px;
  font-family: 'Montserrat', sans-serif;
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
  }

  @media (max-width: 460px) {
    width: 20vh;
  }
`
const FormInputMessage = styled.input`
  height: 200px;
  width: 300px;
  margin-top: 10px;
  text-align: start;
  align-items: center;
  box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.082);
  font-family: 'Montserrat', sans-serif;
  background-color: #dbded9;
  border-style: hidden;
  border-radius: 5px;
  font-size: 14px;
  box-shadow: #c5c5c5 0px 1px 7px -3px, #c5c5c5 0px 1px 3px 0px;
  padding: 0 5px;
  &:focus {
    outline: none;
  }
  @media (max-width: 460px) {
    height: 150px;
    width: 200px;
  }
`

const ButtonSend = styled.button`
  margin-top: 60px;
  color: #101321;
  border-radius: 1rem;
  width: 180px;
  height: 50px;
  background-color: #94ae3f;
  border-style: hidden;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  box-shadow: #c5c5c5 0px 1px 7px -3px, #c5c5c5 0px 1px 3px 0px;

  @media (max-width: 425px) {
    width: 150px;
  }
`
const ButtonBack = styled.button`
  margin-top: 20px;
  color: #101321;
  border-radius: 1rem;
  box-shadow: #c5c5c5 0px 1px 7px -3px, #c5c5c5 0px 1px 3px 0px;
  width: 130px;
  height: 50px;
  background-color: #94ae3f;
  border-style: hidden;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;

  @media (max-width: 425px) {
    width: 100px;
  }
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
          <FormHeader>Get in touch with us</FormHeader>
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
