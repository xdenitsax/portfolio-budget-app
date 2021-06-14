import React from 'react'
import LoginPage from './components/Pages/LoginPage/LoginPage'
import Register from './components/Pages/Register/Register'
import LandingPage from './components/Pages/LandingPage/LandingPage'
import Header from './components/Header/Header'
import Home from './components/Pages/Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import NavigationBar from './components/NavigationBar/NavigationBar'

const App = () => {
  return (
    <div className="app-div">
      {/* <Header /> */}
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={Register} />
          <Route path="/add-transaction" component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
