import React, { Component } from 'react';
import { Link } from 'react-router';


class SingleUserComponent extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const user = this.props.currentUser;

    return (
      <div>
      <h1>{user.name}</h1>
        <div>
        </div>
      </div>
    )
  }
}

export default SingleUserComponent;
