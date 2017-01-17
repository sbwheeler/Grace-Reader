import React from 'react';
import NavBar from './navbar/';
import Footer from './footer/footerComponent';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import 'bootstrap-sass';

import {LoginModal} from './navbar/loginModal';

import { particlesConfig } from './dummy-data/particles.data';
import 'particles.js';

export class App extends React.Component {
  constructor(props) {
  super(props)
  }

  componentDidMount() {
    particlesJS('particles', particlesConfig);
  }

  render() {
    let user = this.props.user;
    let children = this.props.children
    return (
      <div>
        <LoginModal />
        <NavBar user={user} />
        <div id="mainDisplay" className="container">
          { children }
        </div>
        <div id="particles">
          <canvas></canvas>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth
  }
}

export default connect(mapStateToProps)(App)
