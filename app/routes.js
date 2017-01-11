import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './';
import bookListContainer from './book/bookListContainer';

import { fetchAllBooks } from './book/book-actions';

/* -----------------    COMPONENT     ------------------ */

const Routes = ({ fetchAllData }) => (
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={fetchAllData}>
      <IndexRoute component={ bookListContainer } />
        <Route path="booklist" component={ bookListContainer }/>
    </Route>
  </Router>
);

/* -----------------    CONTAINER     ------------------ */

const mapState = null;

const mapDispatch = dispatch => ({
 fetchAllData: () => {
    dispatch(fetchAllBooks())
  }
})

export default connect(mapState, mapDispatch)(Routes);
