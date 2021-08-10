// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import devs from './devs'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  devs
})

export default rootReducer
