import React from 'react';
import NavBar from './navbar/';
import Footer from './footer/footerComponent';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import 'bootstrap-sass';

import { particlesConfig } from './dummy-data/particles.data';
const particlesJS = require('particles.js')

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
        <NavBar user={user} />
        <div id="mainDisplay" className="container">
          { children }
        </div>
        <div id="particles">
          <canvas style={{width: 100 + '%', height: 100 + '%'}}></canvas>
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
