import LoginPage from './components/LoginPage/LoginPage'
import Register from './components/Register/Register'
import FirstPage from './components/FirstPage/FirstPage'
import Header from './components/Header/Header'
import AddNewTransaction from './components/AddNewTransaction/AddNewTransaction'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'

const App = () => {
  return (
    <div className='app-div'>
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={FirstPage} />
          <Route path='/signin' component={LoginPage} />
          <Route path='/register' component={Register} />
          <Route path='/add-transaction' component={AddNewTransaction} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
