import React from 'react'

export const WhoAmI = ({ user, logout }) => {
  return (
    <div className="whoami">
      <span className="whoami-user-name">{user && `${user.firstName} ${user.lastName}` }</span>
      <button className="logout" onClick={logout}>Logout</button>
    </div>
  )
}

import {logout} from 'APP/app/auth/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  ({ auth }) => ({ user: auth }),
  {logout}) (WhoAmI)
