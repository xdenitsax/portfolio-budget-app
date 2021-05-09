import { combineReducers } from 'redux'
import userReducer from './reducers/user'
import historyReducer from './reducers/history'
import transactionFormReducer from './reducers/transactionForm'

const rootReducer = combineReducers({
  user: userReducer,
  history: historyReducer,
  transactionForm: transactionFormReducer,
})

export default rootReducer
