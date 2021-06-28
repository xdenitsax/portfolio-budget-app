import { GET_HISTORY_SUCCESS, GET_HISTORY_ERROR, GET_HISTORY_PENDING } from '../actionTypes'

export const getHistoryPending = userId => {
  return {
    type: GET_HISTORY_PENDING,
  }
}
export const getHistorySuccess = userId => {
  return {
    type: GET_HISTORY_SUCCESS,
    payload: userId,
  }
}
export const getHistoryError = () => {
  return {
    type: GET_HISTORY_ERROR,
  }
}
