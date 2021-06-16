import React from 'react'
import LoginPage from './components/Pages/LoginPage/LoginPage'
import Register from './components/Pages/Register/Register'
import LandingPage from './components/Pages/LandingPage/LandingPage'
import Home from './components/Pages/Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/NavigationBar/NavigationBar'
import About from './components/Pages/About/About'
import Support from './components/Pages/Support/Support'
import BrandAndLogo from './components/BrandAndLogo/BrandAndLogo'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className="app-div">
      <BrandAndLogo />
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/support" component={Support} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
