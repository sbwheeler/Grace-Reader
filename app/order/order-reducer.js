import { FETCH_SINGLE_ORDER, FETCH_ALL_ORDERS, FETCH_SINGLE_ORDER_ADMIN, FETCH_ALL_ORDERS_ADMIN, FETCH_SHOPPING_CART } from './order-actions';

const initialState = {
  allOrders: [],
  currentOrder: [],
  shoppingCart: []
}

const orderReducer = function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_ORDERS: // USER
      return Object.assign({}, state, { allOrders: action.orders });
    case FETCH_SINGLE_ORDER: // USER
      return Object.assign({}, state, { currentOrder: action.currentOrder });
    case FETCH_ALL_ORDERS_ADMIN: // ADMIN
      return Object.assign({}, state, { allOrders: action.orders });
    case FETCH_SINGLE_ORDER_ADMIN: // ADMIN
      return Object.assign({}, state, { currentOrder: action.currentOrder });
    case FETCH_SHOPPING_CART: // USER
      return Object.assign({}, state, { shoppingCart: action.cart });
    default: return state;
  }
}

export default orderReducer;
