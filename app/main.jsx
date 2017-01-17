'use strict'
import '../stylesheets/style.scss';

import React from 'react'
import {Router, Route, IndexRedirect, browserHistory, IndexRoute} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Routes from './routes';
import App from './app'

// ========================= Action Creators =============================================
import {fetchAllBooks, fetchSingleBook, getAuthors, selectBooks } from './book/book-actions';
import { getReviewById } from './review/reviewActionCreator';
import { fetchAllOrders, fetchSingleOrder, fetchAllOrdersForAdmin, fetchSingleOrderForAdmin, fetchShoppingCart } from './order/order-actions';
import {whoami} from './auth/reducers/auth'

// ========================= Containers and Components ==================================

import BookListContainer from './book/bookListContainer';
import OrderListContainer from './order/orderListContainer';
import SingleOrderContainer from './order/singleOrderContainer';
import ReviewListContainer from './review/reviewListContainer';
import SingleReviewContainer from './review/singleReviewContainer';
import SingleBookContainer from './book/singleBookContainer';
import ShoppingCartContainer from './order/ShoppingCartContainer';
import GenresContainer from './book/genresContainer';
import NewUserContainer from './auth/components/newUserContainer';
import newBookFormContainer from './book/newBookFormContainer';
import AuthorsContainer from './book/authorsContainer';
import SelectedAuthorsContainer from './book/SelectedAuthorsContainer';

// ======================== On Enter Store Dispatch Functions ======================

function onAppEnter() {
  return Promise.all([
    store.dispatch(whoami()),
    store.dispatch(fetchAllBooks()),
  ]).then(() => {
    const user = store.getState().auth
    store.dispatch(fetchShoppingCart(user.id))

    if (user && user.adminStatus) store.dispatch(fetchAllOrdersForAdmin())
    else store.dispatch(fetchAllOrders())
  })
}

function onBookEnter(nextRouterState) {
  store.dispatch(fetchSingleBook(nextRouterState.params.bookId));
}

function onSingleReviewEnter(nextRouterState) {
  store.dispatch(getReviewById(nextRouterState.params.reviewId));
}

function onSingleOrderEnter(nextRouterState) {
  const user = store.getState().auth
  const orderId = nextRouterState.params.orderId

  if (user && user.adminStatus) return onAppEnter().then(() => store.dispatch(fetchSingleOrderForAdmin(orderId)))
  else return onAppEnter().then(() => store.dispatch(fetchSingleOrder(orderId)))
}

function onCartEnter() {
  if (store.getState().auth.id) {
    store.dispatch(fetchShoppingCart(store.getState().auth.id))
  }
}

function onOrderListEnter() {
  const user = store.getState().auth

  if (user && user.adminStatus) store.dispatch(fetchAllOrdersForAdmin())
  else store.dispatch(fetchAllOrders())
}

// ======================== Routes ================================================

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" onEnter={onAppEnter} component={App}>
        <Route path="newuser" component={NewUserContainer} />
        <Route path="newbook" component={newBookFormContainer} />
        <Route path="cart" component={ShoppingCartContainer} onEnter={onCartEnter}/>
        <Route path="genres" component={GenresContainer} />
        <Route path="books" component={BookListContainer} />
        <Route path="books/:bookId" onEnter={onBookEnter} component={SingleBookContainer} />
        <Route path="orderlist" component={OrderListContainer} onEnter={onOrderListEnter}/>
        <Route path="orderlist/:orderId" onEnter={onSingleOrderEnter} component={SingleOrderContainer} />
        <Route path="reviews" component={ReviewListContainer} />
        <Route path="reviews/:reviewId" component={SingleReviewContainer} onEnter={onSingleReviewEnter} />
        <Route path="authorsbooks" component={SelectedAuthorsContainer} />
        <Route path="authors" component={AuthorsContainer} />
        <IndexRoute component={GenresContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
