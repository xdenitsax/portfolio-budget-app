import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
