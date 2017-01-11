import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ReviewListComponent from './reviewListComponent';
import SingleReviewComponent from './singleReviewComponent';

describe('Review List Component', () => {
  let reviewList;
  beforeEach('Create component', () => {
    reviewList = shallow(<ReviewListComponent />)
  })

  it('should be a <div> with an expected background', () => {
    expect(reviewList.is('div')).to.be.true
  })

  it('uses <SingleReviewComponent />', () => {
    expect(reviewList.find(SingleReviewComponent).length).to.equal(1)
  })
})
