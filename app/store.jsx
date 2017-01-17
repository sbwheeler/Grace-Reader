import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const store = createStore(rootReducer, global.__REDUX_DEVTOOLS_EXTENSION__ && global.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(createLogger(), thunkMiddleware))

export default store
