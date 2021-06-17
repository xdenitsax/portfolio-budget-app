import { GET_HISTORY_SUCCESS, GET_HISTORY_ERROR } from '../actionTypes'

export const historyUserSuccess = userId => {
  return {
    type: GET_HISTORY_SUCCESS,
    payload: userId,
  }
}
export const historyUserError = () => {
  return {
    type: GET_HISTORY_ERROR,
  }
}
