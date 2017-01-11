import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./old/reducers/auth').default,
  books: require('./book/book-reducer').default
})

export default rootReducer
