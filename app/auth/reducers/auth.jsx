import axios from 'axios'
import { browserHistory } from 'react-router'

const reducer = (state=null, action) => {
  switch(action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const login = (username, password) => {
  return (dispatch) =>
    axios.post('/api/auth/local/login',
      {username, password})
      .then(() => dispatch(whoami()))
      .then(() => browserHistory.push('/'))
      .catch(() => dispatch(whoami()))
}

export const signUp = (credentials) => {
  return (dispatch) =>
    axios.post('/api/users',
      credentials)
      .then(res => res.data)
      .then(({email, password}) => dispatch(login(email, password)))
      .catch(() => dispatch(whoami()))
}


export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .then(() => browserHistory.push('/'))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

export default reducer
