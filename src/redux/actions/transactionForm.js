import {
  CREATE_TRANSACTION_SUCCESS,
  CREATE_TRANSACTION_PENDING,
  CREATE_TRANSACTION_ERROR,
  DELETE_TRANSACTION_SUCCESS,
  DELETE_TRANSACTION_ERROR,
} from '../actionTypes'

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

export const deleteTransactionSuccess = id => {
  return {
    type: DELETE_TRANSACTION_SUCCESS,
    payload: id,
  }
}

export const deleteTransactionError = () => {
  return {
    type: DELETE_TRANSACTION_ERROR,
  }
}
