import {
  LOGIN_USER_ERROR,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
  LOGIN_USER,
} from '../actionTypes'

export const registerUserSuccess = userInfo => {
  return {
    type: CREATE_USER_SUCCESS,
  }
}

export const registerUserError = () => {
  return {
    type: CREATE_USER_ERROR,
  }
}

export const loginUserPending = () => ({
  type: LOGIN_USER,
})

export const loginUserSuccess = (token, userId) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: { token, userId },
  }
}

export const loginUserError = () => {
  return {
    type: LOGIN_USER_ERROR,
  }
}

export const getUserDataSuccess = ({ firstName, lastName }) => {
  return {
    type: GET_USER_DATA_SUCCESS,
    payload: {
      firstName,
      lastName,
    },
  }
}

export const getUserDataError = data => {
  return {
    type: GET_USER_DATA_ERROR,
  }
}
