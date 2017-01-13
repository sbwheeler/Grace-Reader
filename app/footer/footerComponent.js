import React, {Component} from 'react';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="footer">
        <a className="logo">
        </a>
        <h1>HELOOOOOOOOO</h1>
          {
            // links && links.map( (link, index) => {
            //   return <Link key={index} to={`/${link.to}`}><i className={`fa fa-${link.faClass}`}></i></Link>
            // })
          }
        <ul>
          {
            // socialLinks && socialLinks.map( (el, index) => {
            //   return (<li key={index}>
            //             <a href={el.to} className={`fa fa-${el.faClass}`} target="_blank"></a>
            //           </li>)
            // })
          }
        </ul>
      </section>
    );

  }
}
