import { CREATE_TRANSACTION_SUCCESS } from '../actionTypes'

const historyReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_HISTORY_SUCCESS':
      return state
    case CREATE_TRANSACTION_SUCCESS: {
      // Converting amount type string to be a number.
      let numberAmount = parseInt(action.payload.amount)
      // If isExpense is true, we would like to convert the number to be a negativ one.
      if (action.payload.isExpense) {
        numberAmount = numberAmount * -1
      }
      // We declare a variable in which we assign and destructure action. payload
      // and we are assining amount type string to be amount type number
      const transaction = { ...action.payload, amount: numberAmount }

      return [...state, transaction]
    }
    // case CREATE_TRANSACTION_SUCCESS: {
    //   const { description, amount, id, date } = action
    //   const newTransaction = { description, amount, id, date }
    //   return [...state, newTransaction]
    // }

    default:
      return state
  }
}

export default historyReducer
