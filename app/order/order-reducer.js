import { FETCH_SINGLE_ORDER, FETCH_ALL_ORDERS } from './order-actions';

const initialState = {
  allOrders: [],
  currentOrder: {}
}

const orderReducer = function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_ORDERS:
      return Object.assign({}, state, { allOrders: action.orders });
    case FETCH_SINGLE_ORDER:
      return Object.assign({}, state, { currentOrder: action.order });
    default: return state;
  }
}

export default orderReducer;
