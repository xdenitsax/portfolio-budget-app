import { CREATE_TRANSACTION_SUCCESS, CREATE_TRANSACTION_PENDING, CREATE_TRANSACTION_ERROR } from '../actionTypes'

const transactionReducer = (state = { title: '', amoun: '', category: '', userId: '' }, action) => {
  switch (action.type) {
    case CREATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        title: action.payload,
        amount: action.payload,
        category: action.payload,
        userId: action.payload,
      }
    case CREATE_TRANSACTION_PENDING:
      return { ...state }
    case CREATE_TRANSACTION_ERROR:
      return { ...state }

    default:
      return state
  }
}

export default transactionReducer
