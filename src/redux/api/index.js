import { createTransactionSuccess, createTransactionPending, createTransactionError } from '../actions/transactionForm'
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

// export const postRequest = (text, amount) => {
//   return async dispatch => {
//     const requestPostOptions = {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       body: JSON.stringify({ title: text, amount }),
//     }
//     try {
//       const response = await fetch('http://localhost:5000/create', requestPostOptions)
//       const parsedJSON = await response.json()
//       const { title: description, amount, _id: id, date } = parsedJSON
//       // If response status is 200 dispatch an AddTransaction action.
//       if (response.status === 200) {
//         return dispatch(
//           addTransaction({
//             description,
//             amount,
//             id,
//             date,
//           })
//         )
//       }
//       // Else dispatch an error action.
//       return dispatch(createTransactionError())
//       // If there is no response from the server (network error, promise doesn't resolve) catch the error.
//     } catch (error) {
//       console.log(error)
//       return dispatch(createTransactionError())
//     }
//   }
// }

export const registerUser = ({ userInfo, history }) => {
  return async dispatch => {
    dispatch(registerUserPending())
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
    const requestPostOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(userInfo),
    }
    try {
      const response = await fetch('http://localhost:5000/users/login', requestPostOptions)
      const body = await response.json()
      const { token, userId } = body
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
        console.log('parsedJSON', parsedJSON)
        return dispatch(getUserDataSuccess({ ...parsedJSON, userId }))
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

export const getUserHistory = userId => {
  return async dispatch => {
    const requestPostOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }

    try {
      const response = await fetch(`http://localhost:5000/transactions/${userId}`, requestPostOptions)
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
    const requestPostOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },

      body: JSON.stringify({ title, amount, category, userId, isExpense }),
    }
    try {
      const response = await fetch('http://localhost:5000/transactions/create', requestPostOptions)

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
