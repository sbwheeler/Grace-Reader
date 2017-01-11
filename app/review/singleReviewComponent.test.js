import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import SingleReviewComponent from './singleReviewComponent';

describe('Single Review Component', () => {
  let review;
  beforeEach('Create component', () => {
    review = shallow(<SingleReviewComponent />)
  })

  it('should be a <div> with an expected background', () => {
    expect(review.is('div')).to.be.true
  })
})
