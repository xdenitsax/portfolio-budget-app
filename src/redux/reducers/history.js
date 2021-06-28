import {
  CREATE_TRANSACTION_SUCCESS,
  GET_HISTORY_PENDING,
  GET_HISTORY_SUCCESS,
  GET_HISTORY_ERROR,
  DELETE_TRANSACTION_SUCCESS,
} from '../actionTypes'

const historyReducer = (state = { transactions: [], isLoading: true }, action) => {
  switch (action.type) {
    case GET_HISTORY_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case GET_HISTORY_SUCCESS:
      return {
        ...state,
        transactions: action.payload,
        isLoading: false,
      }
    case GET_HISTORY_ERROR:
      return {
        ...state,
        isLoading: false,
      }
    case CREATE_TRANSACTION_SUCCESS: {
      const transaction = action.payload
      return { ...state, transactions: [transaction, ...state.transactions] }
    }
    case DELETE_TRANSACTION_SUCCESS: {
      const deletedTransactionId = action.payload
      const allTransactions = state.transactions
      const notDeleted = allTransactions.filter(item => item._id !== deletedTransactionId)
      return { ...state, transactions: notDeleted }
    }
    default:
      return state
  }
}

export default historyReducer
