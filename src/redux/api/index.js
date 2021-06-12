import {
  addTransaction,
  createTransactionFailure,
} from '../actions/transactionForm'

import { alertActions } from '../actions/transactionForm'

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
      const response = await fetch(
        'http://localhost:5000/create',
        requestPostOptions
      )
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
      return dispatch(alertActions.error()())
      // If there is no response from the server (network error, promise doesn't resolve) catch the error.
    } catch (error) {
      console.log(error)
      return dispatch(alertActions.error())
    }
  }
}

export const postUserRequest = (firstName, lastName, username, password) => {
  return async dispatch => {
    const requestPostOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ user: firstName, lastName, username, password }),
    }
    try {
      const response = await fetch(
        'http://localhost:5000/users/register',
        requestPostOptions
      )
      const parsedJSON = await response.json()
      const { user: firstName, lastName, username, password } = parsedJSON
      // If response status is 200 dispatch an AddUser action.
      if (response.status === 200) {
        return dispatch(
          alertActions.success({
            firstName,
            lastName,
            username,
            password,
          })
        )
      }
      // Else dispatch an error action.
      return dispatch(alertActions.error())
      // If there is no response from the server (network error, promise doesn't resolve) catch the error.
    } catch (error) {
      console.log(error)
      return dispatch(alertActions.error())
    }
  }
}
