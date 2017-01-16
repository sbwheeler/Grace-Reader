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
        <a className="logo"></a>
        <div id='rightsidelogin'> {this.props.user ? <WhoAmI user={this.props.user}/> : <Login />} </div>
        {!this.props.user && <Link to={'/newuser'}> Sign Up </Link> }
        <nav className={this.state.menuClicked ? 'show' : '' }>
          <button><Link to="/orderlist">Orders</Link></button>
          <Link to="/cart"> Shopping Cart </Link>
           <Link to="/newbook"> Add New Book </Link>
          {
            // links && links.map( (link, index) => {
            //   return <Link key={index} to={`/${link.to}`}><i className={`fa fa-${link.faClass}`}></i></Link>
            // })
          }

        </nav>

        <ul>
          {
            // socialLinks && socialLinks.map( (el, index) => {
            //   return (<li key={index}>
            //             <a href={el.to} className={`fa fa-${el.faClass}`} target="_blank"></a>
            //           </li>)
            // })
          }
        </ul>
        <a id="mobile-menu" onClick={this.showMenu} href="#">
          <i className="fa fa-bars"></i>
        </a>
      </section>
    );

  }
}
