import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

// import {whoami} from './reducers/auth'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(createLogger(), thunkMiddleware))

export default store

// Set the auth info at start
// store.dispatch(whoami())
