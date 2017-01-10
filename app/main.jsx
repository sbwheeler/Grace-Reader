'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
// import NavBar from './navbar';
import App from './'
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
    <Router history={browserHistory}>
      <Route path="/" component={App}>

      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
