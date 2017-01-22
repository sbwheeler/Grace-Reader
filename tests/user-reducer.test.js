import { expect } from 'chai';
import { createStore } from 'redux';
import userReducer from 'APP/app/user/user-reducer';
import { FETCH_SINGLE_USER, FETCH_ALL_USERS } from 'APP/app/user/user-actions';

describe('User reducer', () => {
  let testStore;

  beforeEach('Create testing store', () => {
    testStore = createStore(userReducer);
  })

  it('Has expected initial state', () => {
    expect(testStore.getState()).to.be.deep.equal({
      allUsers: [],
      currentUser: {}
    })
  })


  describe('FETCH_ALL_USERS', () => {
    it('Sets all users to the action\'s users property', () => {
      const action = {type: FETCH_ALL_USERS, users: [{}, {}, 'this', 'is', 'an', 'array', 'of', 'test', 'users']}
      testStore.dispatch(action)
      const newState = testStore.getState()
      expect(newState.allUsers).to.be.deep.equal(action.users)
      expect(newState.currentUser).to.be.deep.equal({})
    })
  })

  describe('FETCH_SINGLE_USER', () => {
    it('Sets the single user to the action\'s user property', () => {
      const action = {type: FETCH_SINGLE_USER, user: { name: 'this is a test user' }};
      testStore.dispatch(action)
      const newState = testStore.getState()
      expect(newState.currentUser).to.be.deep.equal(action.user)
      expect(newState.allUsers).to.be.deep.equal([])
    })
  })
})
