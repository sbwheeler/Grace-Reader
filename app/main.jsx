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
import {fetchAllBooks, fetchSingleBook} from './book/book-actions';
import { getReviewById } from './review/reviewActionCreator';
import { fetchAllOrders, fetchSingleOrders } from './order/order-actions';

// ========================= Containers and Components ==================================

import BookListContainer from './book/bookListContainer';
import OrderListContainer from './order/orderListContainer';
import SingleOrderContainer from './order/singleOrderContainer';
import ReviewListContainer from './review/reviewListContainer';
import SingleReviewContainer from './review/singleReviewContainer';
import SingleBookContainer from './book/singleBookContainer';

import newUser from './auth/components/newUserComponent'
import newBook from './book/newBookForm'

// ======================== On Enter Store Dispatch Functions ======================

function onAppEnter() {
  store.dispatch(fetchAllBooks());
}

function onBookEnter(nextRouterState) {
  store.dispatch(fetchSingleBook(nextRouterState.params.bookId));
}

function onSingleReviewEnter(nextRouterState) {
  store.dispatch(getReviewById(nextRouterState.params.reviewId));
}

function onOrderListEnter(nextRouterState) {
  store.dispatch(fetchAllOrders())
}

function onSingleOrderEnter(nextRouterState) {
  store.dispatch(fetchSingleOrders(nextRouterState.params.orderId))
}

function _redirectIfLoggedOut (nextRouterState, replace) {
  if(!store.getState().users.currentUser) {
    replace('/')
  }
}
// ======================== Routes ================================================

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" onEnter={onAppEnter} component={App}>
        <Route path="newuser" component={newUser} />
        <Route path="newbook" component={newBook} />
        <Route path="books" component={BookListContainer} />
        <Route path="books/:bookId" onEnter={onBookEnter} component={SingleBookContainer} />
        <Route path="orderlist" onEnter={onOrderListEnter} component={OrderListContainer} />
        <Route path="orderlist/:orderId" onEnter={onSingleOrderEnter} component={SingleOrderContainer} />
        <Route path="reviews" component={ReviewListContainer} />
        <Route path="reviews/:reviewId" component={SingleReviewContainer} onEnter={onSingleReviewEnter}/>
        <IndexRoute component={BookListContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)


