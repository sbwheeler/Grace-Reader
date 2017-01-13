//NEED TO IMPORT ORDERS TABLE
import axios from 'axios';
/*************************const*******************************/
export const ADD_TO_CART = 'ADD_TO_CART'
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST'
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS'
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE'
//THIS IS RECEIVE ALL BOOKS ACTION CREATORS
// export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_PRODUCTS'


/*REPLACE ALL SHOP INFO WITH BACKEND ORDERS AND FRONT END STATE ORDERS DATA*/

/***************************ACTION CREATORS********************/
export function receiveBooks(Book) {
 return {
   type: RECEIVE_ALL_PRODUCTS,
    products
 }
}


export const addToCart = bookId => (dispatch, getState) => {
  if (getState().books.byId[bookId].inventory > 0) {
    dispatch(addToCartUnsafe(bookId))
  }
}

// export const checkout = products => (dispatch, getState) => {
//   const { cart } = getState()
//   dispatch({
//     type: types.CHECKOUT_REQUEST
//   })
//   shop.buyProducts(products, () => {
//     dispatch({
//       type: types.CHECKOUT_SUCCESS,
//       cart
//     })
//     // Replace the line above with line below to rollback on failure:
//     // dispatch({ type: types.CHECKOUT_FAILURE, cart })
//   })
// }

// export const getAllProducts = () => dispatch => {
//   shop.getProducts(products => {
//     dispatch(receiveProducts(products))
//   })
// }

// export function addToCartUnsafe(productId) {
//   return {
//     type: types.ADD_TO_CART,
//     productId
//   }
// }
