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
      // Converting amount type string to be a number.
      let numberAmount = parseInt(action.payload.amount)
      // If isExpense is true, we would like to convert the number to be a negativ one.
      if (action.payload.isExpense) {
        numberAmount = numberAmount * -1
      }
      // // We declare a variable in which we assign and destructure action. payload
      // // and we are assining amount type string to be amount type number
      // const transaction = { ...action.payload, amount: numberAmount }

      // return [...state, transaction]
      return state
    }
    default:
      return state
  }
}

export default historyReducer
