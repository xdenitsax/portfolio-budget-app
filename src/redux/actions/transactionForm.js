import { CREATE_TRANSACTION_SUCCESS, CREATE_TRANSACTION_PENDING, CREATE_TRANSACTION_ERROR } from '../actionTypes'

export const createTransactionSuccess = transaction => {
  return {
    type: CREATE_TRANSACTION_SUCCESS,
    payload: { ...transaction },
  }
}

export const createTransactionPending = () => {
  return {
    type: CREATE_TRANSACTION_PENDING,
  }
}
export const createTransactionError = () => {
  return {
    type: CREATE_TRANSACTION_ERROR,
  }
}
