import React from 'react'
import LoginPage from './components/LoginPage'
import Register from './components/Register'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import About from './components/About'
import Support from './components/Support'
import BrandAndLogo from './components/BrandAndLogo'
import styled from 'styled-components'

const Content = styled.div``

// const FooterParagraph = styled.p`
//   color: #ffffff;
//   font-size: 12px;
//   margin-top: 0.5rem;
//   text-align: center;
// `
// const Footer = styled.footer`
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   height: 2rem;
//   background-color: #94ae3f9a;
// `

const App = () => {
  return (
    <>
      <Content>
        <BrandAndLogo />
        <Router>
          <Switch>
            <Route path="/welcome" exact component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/support" component={Support} />
            <Redirect from="/" to={'/welcome'} />
          </Switch>
        </Router>
        {/* <Footer>
          <FooterParagraph>®Expense Tracker MMXX</FooterParagraph>
        </Footer> */}
      </Content>
    </>
  )
}

export default App
