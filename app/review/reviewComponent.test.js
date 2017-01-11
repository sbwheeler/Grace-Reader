import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

import ReviewComponent from './reviewComponent';

describe.only('Review Component', () => {
  let review;
  beforeEach('Create component', () => {
    review = shallow(<ReviewComponent />)
  })

  it('should be a <div> with an expected background', () => {
    expect(review.is('div')).to.be.true
  })
})
