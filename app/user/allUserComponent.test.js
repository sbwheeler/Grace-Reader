import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import AllUsersComponent from './allUsersComponent';

describe.only('Single user component', () => {
  let allUsers;
  let userList = [{name: 'this is a test'}, {name: 'i am a user'}, {name: 'harry potter'}]

  beforeEach('Create component', () => {
    allUsers = shallow(<AllUsersComponent users={userList}/>);
  })

  it('Should have the correct current user prop', () => {
    expect(singleUser.find('h1').text()).to.be.deep.equal(currentUser.name);
  })
})
