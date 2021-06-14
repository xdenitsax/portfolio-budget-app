import { addTransaction, createTransactionError } from '../actions/transactionForm'
import {
  registerUserSuccess,
  registerUserError,
  loginUserPending,
  loginUserSuccess,
  loginUserError,
  getUserDataSuccess,
  getUserDataError,
} from '../actions/user'

export const postRequest = (text, amount) => {
  return async dispatch => {
    const requestPostOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ title: text, amount }),
    }
    try {
      const response = await fetch('http://localhost:5000/create', requestPostOptions)
      const parsedJSON = await response.json()
      const { title: description, amount, _id: id, date } = parsedJSON
      // If response status is 200 dispatch an AddTransaction action.
      if (response.status === 200) {
        return dispatch(
          addTransaction({
            description,
            amount,
            id,
            date,
          })
        )
      }
      // Else dispatch an error action.
      return dispatch(createTransactionError())
      // If there is no response from the server (network error, promise doesn't resolve) catch the error.
    } catch (error) {
      console.log(error)
      return dispatch(createTransactionError())
    }
  }
}

export const registerUser = ({ userInfo, history }) => {
  return async dispatch => {
    const requestPostOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(userInfo),
    }
    try {
      const response = await fetch('http://localhost:5000/users/register', requestPostOptions)
      // If response status is 201 dispatch an AddUser action.
      if (response.status === 201) {
        // Redirect user to login page and dispatch a new action.
        history.push('/login')
        return dispatch(registerUserSuccess())
      }
      // Else dispatch an error action.
      return dispatch(registerUserError())
      // If there is no response from the server (network error, promise doesn't resolve) catch the error.
    } catch (error) {
      console.log(error)
      return dispatch(registerUserError())
    }
  }
}

export const loginUser = ({ userInfo, history }) => {
  return async dispatch => {
    const requestPostOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(userInfo),
    }
    dispatch(loginUserPending())
    try {
      const response = await fetch('http://localhost:5000/users/login', requestPostOptions)
      const { token, userId } = await response.json()
      // If response status is 200 dispatch fetch user data action.
      if (response.status === 200) {
        localStorage.setItem('token', token)
        localStorage.setItem('userId', userId)
        history.push('/home')
        dispatch(getUserData(token, userId))
        return dispatch(loginUserSuccess(token, userId))
      }
      // Else dispatch an error action.
      return dispatch(loginUserError())
      // If there is no response from the server (network error, promise doesn't resolve) catch the error.
    } catch (error) {
      console.log(error)
      return dispatch(loginUserError())
    }
  }
}

export const getUserData = (token, userId) => {
  return async dispatch => {
    const requestPostOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Token: token,
      },
    }
    try {
      const response = await fetch(`http://localhost:5000/users/${userId}`, requestPostOptions)
      const parsedJSON = await response.json()
      // If response status is 200 dispatch action with user data.
      if (response.status === 200) {
        return dispatch(getUserDataSuccess(parsedJSON))
      }
      // Else dispatch an error action.
      return dispatch(getUserDataError())
      // If there is no response from the server (network error, promise doesn't resolve) catch the error.
    } catch (error) {
      console.log(error)
      return dispatch(getUserDataError())
    }
  }
}
