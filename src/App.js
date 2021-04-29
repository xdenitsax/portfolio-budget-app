import Header from './components/Header/Header'
import LoginPage from './components/LoginPage/LoginPage'
import Register from './components/Register/Register'
import FirstPage from './components/FirstPage/FirstPage'
import './App.css'

const App = () => {
  return (
    <div className='app-div'>
      <Header />
      <FirstPage />
      {/* <Register /> */}
      {/* <LoginPage /> */}
    </div>
  )
}

export default App
