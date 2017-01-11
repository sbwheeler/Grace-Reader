import React from 'react'

export const WhoAmI = ({ user, logout }) => (
  <div className="whoami">
    <span className="whoami-user-name">{user && user.name}</span>
    <button className="logout" onClick={logout}>Logout</button>
  </div>
)

// EI: wrong import path was breaking stuff
import {logout} from 'APP/app/old/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  ({ auth }) => ({ user: auth }),
  {logout},
) (WhoAmI)
