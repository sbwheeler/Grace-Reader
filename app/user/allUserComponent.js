import React, { Component } from 'react';
import { Link } from 'react-router';


class AllUsersComponent extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const users = this.props.users;

    return (
      <div>
      <h1>ALL USERS</h1>
        <div>
        {
          users && users.map(user => (
            <div key={ user.id }>
              <Link to={`/users/${user.id}`}>
                <div >
                  <h5>
                    <span id={`temp${user.id}`}>{ user.name }</span>
                  </h5>
                </div>
              </Link>
            </div>
          ))
        }
        </div>
      </div>
    )
  }
}

export default AllUsersComponent;
