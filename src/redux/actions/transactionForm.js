import { CREATE_TRANSACTION_SUCCESS, HANDLE_CHANGE_DESCRIPTION, CREATE_TRANSACTION_ERROR } from '../actionTypes'

export const addTransaction = ({ description, amount, id, date }) => {
  return {
    type: CREATE_TRANSACTION_SUCCESS,
    description,
    amount,
    id,
    date,
  }
}

export const createTransactionError = () => {
  return {
    type: CREATE_TRANSACTION_ERROR,
  }
}

export const handleChangeDescription = (value) => {
  return {
    type: HANDLE_CHANGE_DESCRIPTION,
    payload: {
      value,
    },
  }
}

export const createTransaction = (text, amount, isExpense) => {
  return {
    type: CREATE_TRANSACTION_SUCCESS,
    payload: {
      text,
      amount,
      isExpense,
    },
  }
}
