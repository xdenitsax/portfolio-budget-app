import {
  CREATE_USER_PENDING,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  LOGIN_USER_SUCCESS,
  GET_USER_DATA_SUCCESS,
  LOGIN_USER_PENDING,
} from '../actionTypes'

const initialState = {
  firstName: '',
  lastName: '',
  token: '',
  userId: '',
  isLoading: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        isLoading: false,
      }
    case CREATE_USER_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case LOGIN_USER_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    case GET_USER_DATA_SUCCESS:
      const { firstName, lastName, userId } = action.payload
      return {
        ...state,
        firstName,
        lastName,
        userId,
        isLoading: false,
      }
    default:
      return state
  }
}

export default userReducer
