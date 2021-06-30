import React from 'react'
import styled from 'styled-components'

const Header = styled.div``
const HeaderText = styled.h3`
text-align: center;
justify-content: center;
margin-left: 40px;
color: #94ae3f; 
font-family: 'Lora', serif;

font-size: 33px;
@media (max-width: 768px) {
    font-size: 23px;}
`

const BrandAndLogo = () => {
  return (
    <Header>
      <HeaderText>EXPENSE TRACKER</HeaderText>
    </Header>
  )
}

export default BrandAndLogo
