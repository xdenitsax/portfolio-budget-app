import { LOGIN_USER, CREATE_USER_ERROR, CREATE_USER_SUCCESS } from '../actionTypes'

export const registerUserSuccess = (userInfo) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: userInfo,
  }
}

export const registerUserError = () => {
  return {
    type: CREATE_USER_ERROR,
  }
}

export const loginUser = (username, password) => {
  return {
    type: LOGIN_USER,
    payload: {
      username,
      password,
    },
  }
}
