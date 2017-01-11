'use strict'
import '../stylesheets/style.scss';

import React from 'react'
import {Router, Route, IndexRedirect, browserHistory, IndexRoute} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Routes from './routes';
import App from './'
import bookListContainer from './book/bookListContainer';
import orderListContainer from './order/orderListContainer';

// import Jokes from './components/Jokes'
// import Login from './components/Login'
// import WhoAmI from './components/WhoAmI'

// const ExampleApp = connect(
//   ({ auth }) => ({ user: auth })
// ) (
//   ({ user, children }) =>
//     <div>
//       <nav>
//         {user ? <WhoAmI/> : <Login/>}
//       </nav>
//       {children}
//     </div>
// )

        // <IndexRedirect to="/jokes" />
        // <Route path="/jokes" component={Jokes} />
render (
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('main')
)
