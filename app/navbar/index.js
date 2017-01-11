import React, {Component} from 'react';

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
        <a className="logo">
        </a>
        <nav className={this.state.menuClicked ? 'show' : '' }>
        <h1>HELOOOOOOOOO</h1>
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
