import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const TitleLabel = styled.label`
  justify-content: center;
  font-family: 'Raleway', sans-serif;
  padding: 5px;
`

const InputContainer = styled.div`
  justify-content: center;
  padding: 5px;
`
const Input = styled.input`
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

`
const ErrorMessageContainer = styled.div`
  font-family: 'Fira Sans', sans-serif;
  font-size: 13px;
  color: #de0202;
  height: 20px;
`
const ReusableInput = ({ title, name, type, value, setValue, setErrors, errors }) => {
  const handleChange = event => {
    setErrors(state => ({
      ...state,
      [name]: '',
    }))
    setValue(event.target.value)
  }

  return (
    <>
      <Container>
        <TitleLabel>{title}</TitleLabel>
        <InputContainer>
          <Input className={errors[name] ? 'error' : ''} id={name} type={type} value={value} onChange={handleChange} />
        </InputContainer>
      </Container>
      <ErrorMessageContainer>
        {errors[name] ? (
          <p>
            {title}
            {errors[name]}
          </p>
        ) : (
          <p></p>
        )}
      </ErrorMessageContainer>
    </>
  )
}

export default ReusableInput
