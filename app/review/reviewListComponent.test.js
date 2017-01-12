import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ReviewListComponent from './reviewListComponent';
import SingleReviewComponent from './singleReviewComponent';

describe.only('Review List Component', () => {

  const reviewsPassedDown = [
    { id: 0, rating: 1.0, content:'something something' },
    { id: 1, rating: 3.2, content: 'another review' },
    { id: 2, rating: 4.9, content: 'a different review'}
  ]

  let reviewList;
  beforeEach('Create component', () => {
    reviewList = shallow(<ReviewListComponent reviews={reviewsPassedDown} />)
  })

  it('should be a <div> with an expected background', () => {
    expect(reviewList.is('div')).to.be.true
  })

  it('should have reviews on its prop', () => {
    expect(reviewList.instance().props.reviews).to.equal(reviewsPassedDown)
  })

  it('should have 3 singleReview components', () => {
    expect(reviewList.get(0).props.children.length).to.equal(3)
  })
})
