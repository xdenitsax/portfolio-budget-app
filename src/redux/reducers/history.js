import { CREATE_TRANSACTION_SUCCESS } from '../actionTypes'

const historyReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_HISTORY_SUCCESS':
      return state
    case CREATE_TRANSACTION_SUCCESS: {
      const { description, amount, id, date } = action
      const newTransaction = { description, amount, id, date }
      return [...state, newTransaction]
    }

    default:
      return state
  }
}

export default historyReducer
