import {
  HANDLE_CHANGE_DESCRIPTION,
  CREATE_TRANSACTION_FAILURE,
} from '../actionTypes'

const initialState = {
  description: '',
  amount: '',
}

const transactionFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TRANSACTION_FAILURE:
      return state
    case HANDLE_CHANGE_DESCRIPTION:
      return { ...state, description: action.payload.value }

    default:
      return state
  }
}

export default transactionFormReducer
