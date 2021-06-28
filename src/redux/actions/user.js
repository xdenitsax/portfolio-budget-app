import {
  CREATE_USER_PENDING,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  GET_USER_DATA_PENDING,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from '../actionTypes'

export const registerUserPending = () => {
  return { type: CREATE_USER_PENDING }
}

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

export const loginUserPending = () => {
  return { type: LOGIN_USER_PENDING }
}

export const loginUserSuccess = (token, userId) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: { token, userId },
  }
}

export const loginUserError = errorMessage => {
  return {
    type: LOGIN_USER_ERROR,
    errorMessage,
  }
}

export const getUserDataPending = () => {
  return {
    type: GET_USER_DATA_PENDING,
  }
}

export const getUserDataSuccess = ({ firstName, lastName, userId }) => {
  return {
    type: GET_USER_DATA_SUCCESS,
    payload: {
      firstName,
      lastName,
      userId,
    },
  }
}

export const getUserDataError = data => {
  return {
    type: GET_USER_DATA_ERROR,
  }
}

export const logoutPending = () => ({
  type: LOGOUT_PENDING,
})

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
})

export const logoutError = () => ({
  type: LOGOUT_ERROR,
})
