import { FETCH_SINGLE_USER, FETCH_ALL_USERS } from './user-actions';

const initialState = {
  allUsers: [],
  currentUser: {}
}

const userReducer = function(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case FETCH_ALL_USERS:
      newState.allUsers = action.users
      break;
    case FETCH_SINGLE_USER:
      newState.currentUser = action.user;
      break;
    default: return state;
  }
  return newState;
}

export default userReducer;
