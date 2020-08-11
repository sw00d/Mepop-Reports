import { combineReducers, createStore } from 'redux'
import generalReducer from './generalReducer'

const appReducer = combineReducers({
  generalReducer
})

const rootReducer = (state, action) => appReducer(state, action)

export default createStore(rootReducer)
