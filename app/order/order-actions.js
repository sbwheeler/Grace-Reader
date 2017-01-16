import axios from 'axios';

/*********************************CONSTS******************************/

export const FETCH_ALL_ORDERS = 'FETCH_ALL_ORDERS';
export const FETCH_SINGLE_ORDER = 'FETCH_SINGLE_ORDER';
export const FETCH_SHOPPING_CART = 'FETCH_SHOPPING_CART';

/****************************ACTION CREATORS****************************/
export function getAllOrders(orders) {
  return {
    type: FETCH_ALL_ORDERS,
    orders
  }
}

export function getSingleOrder(order) {
  return {
    type: FETCH_SINGLE_ORDER,
    order
  }
}

export function getShoppingCart(cart) {
  return {
    type: FETCH_SHOPPING_CART,
    cart
  }
}

/*************************THUNKS*********************************/

export function fetchAllOrders() {
  return function (dispatch) {
    axios.get('/api/orders')
    .then(res => res.data)
    .then(foundOrders => {
      dispatch(getAllOrders(foundOrders))
    })
    .catch(console.error)
  }
}

export function fetchSingleOrders(id) {
  return function (dispatch) {
    axios.get(`/api/orders/${id}`)
    .then(res => res.data)
    .then(foundOrder => {
      dispatch(getSingleOrder(foundOrder))
    })
    .catch(console.error)
  }
}

export function fetchShoppingCart(id) {
  return function (dispatch) {
    axios.get(`/api/cart/${id}`)
    .then(res => res.data)
    .then(foundCart => {
      dispatch(getShoppingCart(foundCart))
    })
    .catch(console.error)
  }
}
