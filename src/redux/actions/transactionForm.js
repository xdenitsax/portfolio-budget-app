import {
  CREATE_TRANSACTION_SUCCESS,
  HANDLE_CHANGE_DESCRIPTION,
  CREATE_TRANSACTION_FAILURE,
} from '../actionTypes'

export const addTransaction = ({ description, amount, id, date }) => {
  return {
    type: CREATE_TRANSACTION_SUCCESS,
    description,
    amount,
    id,
    date,
  }
}

export const createTransactionFailure = () => {
  return {
    type: CREATE_TRANSACTION_FAILURE,
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

export const createTransaction = (text, amount) => {
  return {
    type: CREATE_TRANSACTION_SUCCESS,
    payload: {
      text,
      amount,
    },
  }
}
