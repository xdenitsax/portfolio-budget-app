import {
  CREATE_USER_PENDING,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
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

const initialState = {
  firstName: '',
  lastName: '',
  token: '',
  userId: '',
  isLoading: false,
  errorMessage: '',
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        isLoading: false,
        errorMessage: '',
      }
    case LOGIN_USER_ERROR:
      return { ...state, isLoading: false, errorMessage: action.errorMessage }
    case CREATE_USER_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }

    case GET_USER_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
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
    case GET_USER_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
      }
    case LOGOUT_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }

    case LOGOUT_ERROR:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}

export default userReducer
