import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import SingleUserComponent from './singleUserComponent';

describe.only('Single user component', () => {
  let singleUser;
  let currentUser = {name: 'this is a test'};

  beforeEach('Create component', () => {
    singleUser = shallow(<SingleUserComponent currentUser={currentUser}/>);
  })

  it('Should have the correct current user prop', () => {
    expect(singleUser.instance().props).to.be.deep.equal({ currentUser: currentUser } )
  })

  it('Should display the correct user prop name within the H1 element', () => {
    expect(singleUser.find('h1').text()).to.be.deep.equal(currentUser.name);
  })
})
