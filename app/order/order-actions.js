import axios from 'axios';

/*********************************CONSTS******************************/

// USERS
export const FETCH_ALL_ORDERS = 'FETCH_ALL_ORDERS';
export const FETCH_SINGLE_ORDER = 'FETCH_SINGLE_ORDER';

// ADMINS
export const FETCH_ALL_ORDERS_ADMIN = 'FETCH_ALL_ORDERS_ADMIN';
export const FETCH_SINGLE_ORDER_ADMIN = 'FETCH_ALL_ORDER_ADMIN';

export const FETCH_SHOPPING_CART = 'FETCH_SHOPPING_CART';

/****************************ACTION CREATORS****************************/

// USERS ======================

export function getAllOrders(orders) {
  return {
    type: FETCH_ALL_ORDERS,
    orders
  }
}

export function getSingleOrder(currentOrder) {
  return {
    type: FETCH_SINGLE_ORDER,
    currentOrder
  }
}

export function getShoppingCart(cart) {
  return {
    type: FETCH_SHOPPING_CART,
    cart
  }
}

// ADMIN ===============================
export function getSingleOrderAdmin(order) {
  return {
    type: FETCH_SINGLE_ORDER_ADMIN,
    order
  }
}

export function getAllOrdersAdmin(orders) {
  return {
    type: FETCH_ALL_ORDERS_ADMIN,
    orders
  }
}


/*************************THUNKS*********************************/

// USERS =======================================

// Get All orders for User
export function fetchAllOrders() {
  return function (dispatch, getState) {
    const userId = getState().auth.id

    axios.get(`/api/orders/${userId}`)
      .then(res => res.data)
      .then(foundOrders => {
        dispatch(getAllOrders(foundOrders))
      })
      .catch(console.error)
    }
}

// Get One Order for User
export function fetchSingleOrder(orderId) {
  return function (dispatch, getState) {
    const userId = getState().auth.id

    axios.get(`/api/orders/${userId}/${orderId}`)
      .then(res => res.data)
      .then(foundOrder => {
        dispatch(getSingleOrder(foundOrder))
      })
      .catch(console.error)
    }
}

// Get shopping cart
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

// Add an item / update shopping cart
export function addToCart(bookId) {
  return function (dispatch, getState) {
    const userId = getState().auth.id
    axios.put(`/api/cart/${userId}`, { bookId })
      .then(res => res.data)
      .catch(console.error)
  }
}

// ADMINS ============================================

// Get All orders for Admin

export function fetchAllOrdersForAdmin() {
  return function (dispatch, getState) {
    axios.get('/api/orders/')
      .then(res => res.data)
      .then(foundOrders => {
        dispatch(getAllOrdersAdmin(foundOrders))
      })
      .catch(console.error)
    }
}

// Get ONE orders for Admin

export function fetchSingleOrderForAdmin(orderId) {
  return function (dispatch, getState) {
    axios.get(`/api/orders/${orderId}`)
      .then(res => res.data)
      .then(foundOrder => {
        dispatch(getSingleOrderAdmin(foundOrder))
      })
      .catch(console.error)
    }
}
