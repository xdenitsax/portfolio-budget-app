// Thunk middleware.
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
  getUserDataPending,
  getUserDataSuccess,
  getUserDataError,
  logoutPending,
  logoutSuccess,
  logoutError,
} from '../actions/user'
import { getHistoryPending, getHistorySuccess, getHistoryError } from '../actions/history'
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
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/register`, requestOptions)
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
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/login`, requestOptions)
      const body = await response.json()
      console.log('response body', body)
      const { token, userId } = body
      // If response status is 200 dispatch fetch user data action.
      if (response.status === 200) {
        setUserCredentials({ token, userId })
        history.push('/home')
        dispatch(loginUserSuccess(token, userId))
        return
      }
      // And dispatch an error action.
      dispatch(loginUserError(body.message))
      // If there is no response from the server (network error, promise doesn't resolve) catch the error.
    } catch (error) {
      console.log(error)
      dispatch(loginUserError())
    }
  }
}

export const getUserData = history => {
  const { token, userId } = getUserCredentials()
  return async dispatch => {
    dispatch(getUserDataPending())
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Token: token,
      },
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/${userId}`, requestOptions)
      const parsedJSON = await response.json()
      // If response status is 200 dispatch action with user data.
      if (response.status === 200) {
        dispatch(getUserDataSuccess({ ...parsedJSON, userId }))
        return
      }
      if (response.status === 401) {
        history.push('/welcome')
      }
      // And dispatch an error action.
      dispatch(getUserDataError())
      // If there is no response from the server (network error, promise doesn't resolve) catch the error.
    } catch (error) {
      console.log(error)
      return dispatch(getUserDataError())
    }
  }
}

export const getAllTransactions = history => {
  const { token, userId } = getUserCredentials()
  return async dispatch => {
    dispatch(getHistoryPending())
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Token: token,
      },
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/transactions/${userId}`, requestOptions)
      const parsedJSON = await response.json()
      // If response status is 200 dispatch action with user data.
      if (response.status === 200) {
        return dispatch(getHistorySuccess(parsedJSON))
      }
      if (response.status === 401) {
        history.push('/welcome')
      }
      // And dispatch an error action.
      dispatch(getHistoryError())
      // If there is no response from the server (network error, promise doesn't resolve) catch the error.
    } catch (error) {
      console.log(error)
      return dispatch(getHistoryError())
    }
  }
}

export const createTransaction = ({ title, amount, category, userId, isExpense, history }) => {
  const { token } = getUserCredentials()
  return async dispatch => {
    dispatch(createTransactionPending())
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Token: token,
      },
      body: JSON.stringify({ title, amount, category, userId, isExpense }),
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/transactions/create`, requestOptions)

      if (response.status === 201) {
        const parsedResponse = await response.json()
        // Redirect user to login page and dispatch a new action.
        dispatch(createTransactionSuccess(parsedResponse))
        return
      }
      if (response.status === 401) {
        history.push('/welcome')
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

export const deleteTransaction = (transactionId, history) => {
  const { token, userId } = getUserCredentials()
  return async dispatch => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Token: token,
      },
      body: JSON.stringify({ userId }),
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/transactions/delete/${transactionId}`,
        requestOptions
      )

      // If response status is 204 dispatch action delete transaction.
      if (response.status === 204) {
        return dispatch(deleteTransactionSuccess(transactionId))
      }
      if (response.status === 401) {
        history.push('/welcome')
        return
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

export const logout = history => {
  const { token, userId } = getUserCredentials()
  return async dispatch => {
    dispatch(logoutPending())
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Token: token,
      },
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/logout/${userId}`, requestOptions)
      console.log('response', response)
      if (response.status === 204) {
        history.push('/welcome')
        dispatch(logoutSuccess())
        return
      }
      dispatch(logoutError())
    } catch (error) {
      console.log(error)
    }
  }
}
