import { combineReducers } from 'redux'
import { counter } from './Counter'
import { auth } from './Auth.redux'

export default combineReducers({counter, auth})