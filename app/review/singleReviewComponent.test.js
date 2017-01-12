import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import SingleReviewComponent from './singleReviewComponent';
import StarRatingComponent from 'react-star-rating-component';

describe('Single Review Component', () => {
  const rating = 3.5
  const content = 'content content content'
  let review;
  beforeEach('Create component', () => {
    review = shallow(<SingleReviewComponent rating={rating} content={content} />)
  })

  it('should be a <div> with an expected background', () => {
    expect(review.is('div')).to.be.true
  })

  it('should have rating and content on its prop', () => {
    expect(review.instance().props.rating).to.equal(rating)
    expect(review.instance().props.content).to.equal(content)
  })

  it('should have a StarRatingComponent', () => {
    expect(review.find(StarRatingComponent)).to.have.length(1);
  })

  it('StarRatingComponent should have a value set to props.rating', () => {
    expect(review.find(StarRatingComponent).props().value).to.equal(3.5)
  })
})
