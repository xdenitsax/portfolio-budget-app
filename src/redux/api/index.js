import { addTransaction, createTransactionError } from '../actions/transactionForm'
import { registerUserSuccess, registerUserError } from '../actions/user'

export const postRequest = (text, amount) => {
  return async (dispatch) => {
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

export const postUserRequest = (firstName, lastName, username, password) => {
  return async (dispatch) => {
    const requestPostOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, username, password }),
    }
    try {
      const response = await fetch('http://localhost:5000/users/register', requestPostOptions)
      const parsedJSON = await response.json()
      const { firstName, lastName, username, password } = parsedJSON
      // If response status is 200 dispatch an AddUser action.
      if (response.status === 200) {
        return dispatch(
          registerUserSuccess({
            firstName,
            lastName,
            username,
            password,
          })
        )
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
