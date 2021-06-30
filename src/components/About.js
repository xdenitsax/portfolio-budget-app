import React from 'react'
import NavigationBar from './NavigationBar'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ContainerAboutUs = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const ImageGirl = styled.img`
  height: 400px;
  border-radius: 10px;

  @media (max-width: 750px) {
    height: 300px;
  }
  @media (max-width: 545px) {
    height: 250px;
  }
  @media (max-width: 430px) {
    height: 180px;
  }
  @media (max-width: 380px) {
    height: 150px;
  }
`
const TextContainer = styled.div`
  align-items: center;
  width: 40vh;
  display: flex;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  align-self: center;
  flex-wrap: wrap;
  text-align: justify;
  padding-top: 30px;
  padding-botom: 30vh;
  @media screen and (max-width: 1200px) {
    width: 70vh;
  }
  @media screen and (max-width: 750px) {
    width: 50vh;
  }
  @media screen and (max-width: 550px) {
    width: 40vh;
  }
  @media screen and (max-width: 430px) {
    width: 30vh;
  }
  @media screen and (max-width: 330px) {
    width: 20vh;
  }
`
const Text = styled.p`
  @media screen and (max-width: 550px) {
    font-size: 14px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 100px;
  margin-left: 30px;
`

const Button = styled.button`
  background-color: #94ae3f;
  font-size: 13px;
  height: 40px;
  width: 120px;
  font-family: 'Montserrat', sans-serif;
  border-radius: 6px;
  outline: none;
  border: hidden;
`

const About = () => {
  return (
    <>
      <NavigationBar />
      <ContainerAboutUs>
        <ImageContainer>
          <ImageGirl src="./girl-saving.jpg" />
        </ImageContainer>
        <TextContainer>
          <Text>
            Expense Tracker was founded on a simple, powerful idea: modern family life is hard enough. There has to be a
            better way. And that is how we live and work every day. How can we make life easier — for everyone? From
            employees, partners and customers we want to use technology, built for the way we live and work now, to make
            life easier. This makes for happy customers, happy children, happy workers and overall, a better way to
            live.
          </Text>
        </TextContainer>
      </ContainerAboutUs>

      <ButtonContainer>
        <Link to="/home">
          <Button>Go Back</Button>
        </Link>
      </ButtonContainer>
    </>
  )
}

export default About
