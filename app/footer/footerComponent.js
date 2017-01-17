import React, {Component} from 'react';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="footer">
        <a className="logo">
        </a>
        <ul>
          <li>© 2016  Bogdan Polovko, Sam Wheeler, Damon Ye, John Yom</li>
        </ul>
      </div>
    );

  }
}
