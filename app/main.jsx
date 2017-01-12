'use strict'
import '../stylesheets/style.scss';

import React from 'react'
import {Router, Route, IndexRedirect, browserHistory, IndexRoute} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Routes from './routes';
import App from './'

import {fetchAllBooks} from './book/book-actions';

import bookListContainer from './book/bookListContainer';
import orderListContainer from './order/orderListContainer';
import ReviewListContainer from './review/reviewListContainer';
import SingleReviewContainer from './review/singleReviewContainer';


function onAppEnter() {
  store.dispatch(fetchAllBooks());
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" onEnter={onAppEnter} component={App}>
        <Route path="booklist" component={bookListContainer} />
        <Route path="orderlist" component={orderListContainer} />
        <Route path="reviews" component={ReviewListContainer} />
        <Route path="reviews/reviewId" component={SingleReviewContainer} />
        <IndexRoute component={bookListContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
