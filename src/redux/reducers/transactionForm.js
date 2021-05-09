import {
  CREATE_TRANSACTION_SUCCESS,
  HANDLE_CHANGE_DESCRIPTION,
} from '../actionTypes'

const initialState = {
  description: '',
  amount: '',
}

const transactionFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TRANSACTION_SUCCESS:
      const { description, amount } = action
      return {
        ...state,
        description,
        amount,
      }

    case HANDLE_CHANGE_DESCRIPTION:
      return { ...state, description: action.payload.value }

    default:
      return state
  }
}

export default transactionFormReducer
