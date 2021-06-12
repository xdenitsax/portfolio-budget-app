import { CREATE_NEW_USER, LOGIN_USER } from '../actionTypes'

export const createUser = (firstName, lastName, username, password) => {
  return {
    type: CREATE_NEW_USER,
    payload: {
      firstName,
      lastName,
      username,
      password,
    },
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
