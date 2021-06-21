import { CREATE_TRANSACTION_SUCCESS, GET_HISTORY_SUCCESS } from '../actionTypes'

const historyReducer = (state = { transactions: [], isLoading: false }, action) => {
  switch (action.type) {
    case GET_HISTORY_SUCCESS:
      return {
        ...state,
        transactions: action.payload,
        isLoading: false,
      }
    case CREATE_TRANSACTION_SUCCESS: {
      const transaction = action.payload
      console.log('state', state)

      return { ...state, transactions: [transaction, ...state.transactions] }
    }
    default:
      return state
  }
}

export default historyReducer
