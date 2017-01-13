'use strict'
import '../stylesheets/style.scss';

import React from 'react'
import {Router, Route, IndexRedirect, browserHistory, IndexRoute} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Routes from './routes';
import App from './app'

import {fetchAllBooks, fetchSingleBook} from './book/book-actions';
import { getReviewById } from './review/reviewActionCreator';

import BookListContainer from './book/bookListContainer';
import OrderListContainer from './order/orderListContainer';
import ReviewListContainer from './review/reviewListContainer';
import SingleReviewContainer from './review/singleReviewContainer';
import SingleBookContainer from './book/singleBookContainer';

import newUser from './auth/components/newUserComponent'


function onAppEnter() {
  store.dispatch(fetchAllBooks());
}

function onBookEnter(nextRouterState) {
  store.dispatch(fetchSingleBook(nextRouterState.params.bookId));
}

function onSingleReviewEnter(nextRouterState) {
  store.dispatch(getReviewById(nextRouterState.params.reviewId));
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" onEnter={onAppEnter} component={App}>
        <Route path="newuser" component={newUser} />
        <Route path="books" component={BookListContainer} />
        <Route path="books/book/:bookId" onEnter={onBookEnter} component={SingleBookContainer} />
        <Route path="orderlist" component={OrderListContainer} />
        <Route path="reviews" component={ReviewListContainer} />
        <Route path="reviews/:reviewId" component={SingleReviewContainer} onEnter={onSingleReviewEnter}/>
        <IndexRoute component={BookListContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)


