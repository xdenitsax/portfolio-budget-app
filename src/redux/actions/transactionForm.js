import {
  CREATE_TRANSACTION_SUCCESS,
  HANDLE_CHANGE_DESCRIPTION,
} from '../actionTypes'

export const addTransaction = (description, amount) => {
  return {
    type: CREATE_TRANSACTION_SUCCESS,
    description,
    amount,
  }
}

export const handleChangeDescription = value => {
  return {
    type: HANDLE_CHANGE_DESCRIPTION,
    payload: {
      value,
    },
  }
}
