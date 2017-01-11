import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import AllUsersComponent from './allUserComponent';

describe('All users component', () => {
  let allUsers;
  let userList = [{name: 'this is a test', id: 1}, {name: 'i am a user', id: 2}, {name: 'harry potter', id: 3 }, {name: 'Sam Wheeler', id: 4 }]

  beforeEach('Create component', () => {
    allUsers = shallow(<AllUsersComponent users={userList}/>);
  })

  it('Should have the correct amount of users listed', () => {
    expect(allUsers.find('h5').length).to.be.equal(userList.length);
  })

  it('Should list the correct user names from props', () => {
    expect(allUsers.instance().props).to.be.deep.equal({ users: userList } )
  })
})
