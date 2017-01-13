//NEED TO IMPORT ORDERS TABLE

export const ADD_TO_CART = 'ADD_TO_CART'
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST'
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS'
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE'
export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_PRODUCTS'


/*REPLACE ALL SHOP INFO WITH BACKEND ORDERS AND FRONT END STATE ORDERS DATA*/
export function receiveProducts(products) {
 return {
   type: RECEIVE_ALL_PRODUCTS,
    products
 }
}
// export const addToCart = productId => (dispatch, getState) => {
//   if (getState().products.byId[productId].inventory > 0) {
//     dispatch(addToCartUnsafe(productId))
//   }
// }

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()
  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}

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
