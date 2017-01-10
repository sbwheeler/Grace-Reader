import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./old/reducers/auth').default,
})

export default rootReducer
