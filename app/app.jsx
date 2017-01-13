import React from 'react';
import NavBar from './navbar/';
import Footer from './footer/footerComponent';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const App = ({ user, children }) => {
  return (
    <div>
      <NavBar user={user} />
      <div id="mainDisplay" className="container">
        { children }
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.auth
  }
}

export default connect(mapStateToProps)(App)
