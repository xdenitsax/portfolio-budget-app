import React from 'react'
import LoginPage from './components/Pages/LoginPage/LoginPage'
import Register from './components/Pages/Register/Register'
import LandingPage from './components/Pages/LandingPage/LandingPage'
import Home from './components/Pages/Home/Home'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import About from './components/Pages/About/About'
import Support from './components/Pages/Support/Support'
import BrandAndLogo from './components/BrandAndLogo/BrandAndLogo'

const App = () => {
  return (
    <div className="app-div">
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
      <footer>
        <p className="footer-paragraph">®Expense Tracker MMXX</p>
      </footer>
    </div>
  )
}

export default App
