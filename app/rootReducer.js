import { combineReducers } from 'redux'
import bookReducer from './book/book-reducer'
import authReducer from './auth/reducers/auth'
import orderReducer from './order/order-reducer'
import reviewReducer from './review/reviewReducer'
import userReducer from './user/user-reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  books: bookReducer,
  orders: orderReducer,
  reviews: reviewReducer,
  users: userReducer
})

export default rootReducer
