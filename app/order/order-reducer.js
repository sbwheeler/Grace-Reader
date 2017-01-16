import { FETCH_SINGLE_ORDER, FETCH_ALL_ORDERS, FETCH_SHOPPING_CART } from './order-actions';

const initialState = {
  allOrders: [],
  currentOrder: {},
  shoppingCart: []
}

const orderReducer = function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_ORDERS:
      return Object.assign({}, state, { allOrders: action.orders });
    case FETCH_SINGLE_ORDER:
      return Object.assign({}, state, { currentOrder: action.order });
    case FETCH_SHOPPING_CART:
      return Object.assign({}, state, { shoppingCart: action.cart });
    default: return state;
  }
}

export default orderReducer;
