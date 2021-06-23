import {
  createTransactionSuccess,
  createTransactionPending,
  createTransactionError,
  deleteTransactionSuccess,
  deleteTransactionError,
} from '../actions/transactionForm'
import {
  registerUserPending,
  registerUserSuccess,
  registerUserError,
  loginUserPending,
  loginUserSuccess,
  loginUserError,
  getUserDataSuccess,
  getUserDataError,
} from '../actions/user'
import { historyUserSuccess, historyUserError } from '../actions/history'
import { setUserCredentials, getUserCredentials } from '../../utils'

export const registerUser = ({ userInfo, history }) => {
  return async dispatch => {
    dispatch(registerUserPending())
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(userInfo),
    }
    try {
      const response = await fetch('http://localhost:5000/users/register', requestOptions)
      // If response status is 201 dispatch an AddUser action.
      if (response.status === 201) {
        // Redirect user to login page and dispatch a new action.
        history.push('/login')
        dispatch(registerUserSuccess())
        return
      }
      // Else dispatch an error action.
      dispatch(registerUserError())
      return
      // If there is no response from the server (network error, promise doesn't resolve) catch the error.
    } catch (error) {
      console.log(error)
      dispatch(registerUserError())
      return
    }
  }
}

export const loginUser = ({ userInfo, history }) => {
  return async dispatch => {
    dispatch(loginUserPending())
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(userInfo),
    }
    try {
      const response = await fetch('http://localhost:5000/users/login', requestOptions)
      const body = await response.json()
      const { token, userId } = body
      // If response status is 200 dispatch fetch user data action.
      if (response.status === 200) {
        setUserCredentials({ token, userId })
        history.push('/home')
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

export const getUserData = history => {
  const { token, userId } = getUserCredentials()
  return async dispatch => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Token: token,
      },
    }
    try {
      const response = await fetch(`http://localhost:5000/users/${userId}`, requestOptions)
      const parsedJSON = await response.json()
      // If response status is 200 dispatch action with user data.
      if (response.status === 200) {
        dispatch(getUserDataSuccess({ ...parsedJSON, userId }))
        return
      }
      if (response.status === 401) {
        history.push('/login')
        return
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

export const getUserHistory = () => {
  const { token, userId } = getUserCredentials()
  return async dispatch => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Token: token,
      },
    }

    try {
      const response = await fetch(`http://localhost:5000/transactions/${userId}`, requestOptions)
      const parsedJSON = await response.json()
      // If response status is 200 dispatch action with user data.
      if (response.status === 200) {
        return dispatch(historyUserSuccess(parsedJSON))
      }
      // Else dispatch an error action.
      return dispatch(historyUserError())
      // If there is no response from the server (network error, promise doesn't resolve) catch the error.
    } catch (error) {
      console.log(error)
      return dispatch(historyUserError())
    }
  }
}

export const createTransaction = ({ title, amount, category, userId, isExpense }) => {
  return async dispatch => {
    dispatch(createTransactionPending())
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },

      body: JSON.stringify({ title, amount, category, userId, isExpense }),
    }
    try {
      const response = await fetch('http://localhost:5000/transactions/create', requestOptions)

      if (response.status === 201) {
        const parsedResponse = await response.json()
        // Redirect user to login page and dispatch a new action.
        dispatch(createTransactionSuccess(parsedResponse))
        return
      }
      // Else dispatch an error action.
      dispatch(createTransactionError())
      return
      // If there is no response from the server (network error, promise doesn't resolve) catch the error.
    } catch (error) {
      console.log(error)
      dispatch(createTransactionError())
      return
    }
  }
}

export const deleteTransaction = id => {
  return async dispatch => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }

    try {
      const response = await fetch(`http://localhost:5000/transactions/delete/${id}`, requestOptions)

      // If response status is 204 dispatch action delete transaction.
      if (response.status === 204) {
        return dispatch(deleteTransactionSuccess(id))
      }
      // Else dispatch an error action.
      return dispatch(deleteTransactionError())
      // If there is no response from the server (network error, promise doesn't resolve) catch the error.
    } catch (error) {
      console.log(error)
      return dispatch(deleteTransactionError())
    }
  }
}
