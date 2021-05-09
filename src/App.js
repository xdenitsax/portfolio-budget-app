import LoginPage from './components/Pages/LoginPage/LoginPage'
import Register from './components/Pages/Register/Register'
import LandingPage from './components/Pages/LandingPage/LandingPage'
import Header from './components/Header/Header'
import Home from './components/Pages/Home/Home'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'

const App = () => {
  return (
    <div className='app-div'>
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={LandingPage} />
          <Route path='/signin' component={LoginPage} />
          <Route path='/register' component={Register} />
          <Route path='/add-transaction' component={Home} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
