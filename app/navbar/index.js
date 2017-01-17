import React, {Component} from 'react';
import WhoAmI from '../auth/components/WhoAmI'
import Login from '../auth/components/Login'
import newUser from '../auth/components/newUserComponent'
import { Link } from 'react-router'
import store from '../store'
import { setGenre } from '../book/book-actions'


export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClicked: false,
      active: true
    }
    this.showMenu = this.showMenu.bind(this);
    this.bookLinkClick = this.bookLinkClick.bind(this);
  }

  showMenu () {
    if (this.state.menuClicked) {
      this.setState({menuClicked: false})
    } else {
      this.setState({menuClicked: true})
    }
  }

  bookLinkClick() {
    event.preventDefault();
    store.dispatch(setGenre(''))
  }

  render() {
    return (
      <section id="navigation">
        <Link className="logo" to='/'><i className="fa fa-home fa-lg"></i></Link>
        <nav className={this.state.menuClicked ? 'show' : '' }>
            <Link to="/books" onClick={() => this.bookLinkClick()}><i className="fa fa-book fa-lg"></i></Link>
            <Link to="/genres"><i className="fa fa-bookmark fa-lg"></i></Link>
            <Link to="/cart"><i className="fa fa-cart-arrow-down fa-lg"></i></Link>
            <Link to="/authors"><i className="fa fa-pencil fa-lg"></i></Link>
            { this.props.user && <Link to="/orderlist"><i className="fa fa-usd fa-lg"></i></Link> }
            {!this.props.user && <Link id="sign-up" to={'/newuser'}><i className="fa fa-plus"></i><i className="fa fa-user-circle-o fa-lg"></i></Link> }

        </nav>
        <ul>
          <div id='login-wrap'> {this.props.user ? <WhoAmI user={this.props.user}/> : <Login id="login" />} </div>
        </ul>
        <a id="mobile-menu" onClick={this.showMenu} href="#">
          <i className="fa fa-bars"></i>
        </a>
      </section>
    );

  }
}
