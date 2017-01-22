import { expect } from 'chai'

import { getAllUsers, getSingleUser, FETCH_ALL_USERS, FETCH_SINGLE_USER } from 'APP/app/user/user-actions'

describe('User actions', () => {
  describe('Fetch all users', () => {
    it('returns the properly formatted action', () => {
      const testUsers = [{}, {}, 'this', 'is', 'an', 'array', 'of', 'test', 'users']
      expect(getAllUsers(testUsers)).to.be.deep.equal({ type: FETCH_ALL_USERS, users: testUsers })
    })

  })

  describe('Fetch single user', () => {
    it('returns the properly formatted action', () => {
      const testUser = { name: 'this is a test user' };
      expect(getSingleUser(testUser)).to.be.deep.equal({ type: FETCH_SINGLE_USER, user: testUser})
    })
  })
})
