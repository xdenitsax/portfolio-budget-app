import { combineReducers } from 'redux'
import userReducer from './reducers/user'
import historyReducer from './reducers/history'

const rootReducer = combineReducers({
  user: userReducer,
  history: historyReducer,
})

export default rootReducer
