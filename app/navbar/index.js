import React, {Component} from 'react';
import WhoAmI from '../auth/components/WhoAmI'
import Login from '../auth/components/Login'
import newUser from '../auth/components/newUserComponent'
import { Link } from 'react-router'

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClicked: false,
      active: true
    }
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu () {
    if (this.state.menuClicked) {
      this.setState({menuClicked: false})
    } else {
      this.setState({menuClicked: true})
    }
  }

  render() {
    return (
      <section id="navigation">
        <Link className="logo fa fa-home fa-lg" to='/'></Link>
        <nav className={this.state.menuClicked ? 'show' : '' }>
            <Link to="/books"><i className="fa fa-book fa-lg"></i></Link>
            <Link to="/cart"><i className="fa fa-cart-arrow-down fa-lg"></i></Link>
            { this.props.user && <Link to="/orderlist"><i className="fa fa-usd fa-lg"></i></Link> }
            <Link to="/genres"><i className="fa fa-bookmark fa-lg"></i></Link>
        </nav>
        <ul>
          <div id='login-wrap'> {this.props.user ? <WhoAmI user={this.props.user}/> : <Login id="login" />} </div>
          {!this.props.user && <Link to={'/newuser'}> Sign Up </Link> }
        </ul>
        <a id="mobile-menu" onClick={this.showMenu} href="#">
          <i className="fa fa-bars"></i>
        </a>
      </section>
    );

  }
}
