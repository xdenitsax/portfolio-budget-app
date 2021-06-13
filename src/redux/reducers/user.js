import { CREATE_USER_SUCCESS, CREATE_USER_ERROR, LOGIN_USER } from '../actionTypes'

const initialState = {
  profile: {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  },
  formSubmitted: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        formSubmitted: false,
      }

    case CREATE_USER_SUCCESS:
      console.log('action', action)
      return {
        ...state,
        // firstNanme: action.payload.firstName,
        // lastName: action.payload.lastName,
        // username: action.payload.username,
        // password: action.payload.password,
        // formSubmitted: false, // after update user formsubmition reset
      }
    default:
      return state
  }
}

export default userReducer
