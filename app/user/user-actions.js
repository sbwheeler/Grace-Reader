import axios from 'axios';

export const FETCH_ALL_USERS = 'FETCH_ALL_USERS';
export const FETCH_SINGLE_USER = 'FETCH_SINGLE_USER';


export function getAllUsers(users) {
  return {
    type: FETCH_ALL_USERS,
    users
  }
}

export function getSingleUser(user) {
  return {
    type: FETCH_SINGLE_USER,
    user
  }
}


export function fetchAllUsers() {
  return function (dispatch) {
    axios.get('/api/users')
    .then(res => res.data)
    .then(foundUsers => {
      dispatch(getAllUsers(foundUsers))
    })
    .catch(console.error)
  }
}

export function fetchSingleUser(id) {
  return function (dispatch) {
    axios.get(`/api/users/${id}`)
    .then(res => res.data)
    .then(foundUser => {
      dispatch(getSingleUser(foundUser))
    })
    .catch(console.error)
  }
}
