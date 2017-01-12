'use strict'
import '../stylesheets/style.scss';

import React from 'react'
import {Router, Route, IndexRedirect, browserHistory, IndexRoute} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Routes from './routes';
import App from './'

import {fetchAllBooks, fetchSingleBook} from './book/book-actions';

import BookListContainer from './book/bookListContainer';
import OrderListContainer from './order/orderListContainer';
import ReviewListContainer from './review/reviewListContainer';
import SingleReviewContainer from './review/singleReviewContainer';
import SingleBookContainer from './book/singleBookContainer';


function onAppEnter() {
  store.dispatch(fetchAllBooks());
}
function onBookEnter(nextRouterState) {
  store.dispatch(fetchSingleBook(nextRouterState.params.id));
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" onEnter={onAppEnter} component={App}>
        <Route path="books" component={BookListContainer}>
          <Route path="book/:bookId" onEnter={onBookEnter} component={SingleBookContainer} />
        </Route>
        <Route path="orderlist" component={OrderListContainer} />
        <Route path="reviews" component={ReviewListContainer} />
        <Route path="reviews/:reviewId" component={SingleReviewContainer} />
        <IndexRoute component={BookListContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
