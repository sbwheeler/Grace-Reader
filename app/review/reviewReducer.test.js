import { expect } from 'chai';
import { createStore } from 'redux';

import reducer from './reviewReducer';
import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from './reviewActionCreator';

describe.only('Review Reducers', () => {
  let testStore;
  beforeEach('Create testing store', () => {
    testStore = createStore(reducer);
  })

  it('has the expected initial state', () => {
    expect(testStore.getState()).to.deep.equal({
      selectedReview: '',
      allReviews: []
    })
  })

  it('RECEIVE_REVIEWS', () => {
    const manyReviews = ['', 'sdadasd', '1231231']
    testStore.dispatch({type: RECEIVE_REVIEWS, reviews: manyReviews })

    const newState = testStore.getState();

    expect(newState.allReviews).to.deep.equal(manyReviews)
    expect(newState.selectedReview).to.equal('')
  })

  it('RECEIVE_REVIEW', () => {
    const review = 'something something something'
    testStore.dispatch({type: RECEIVE_REVIEW, review: review })

    const newState = testStore.getState();

    expect(newState.allReviews).to.deep.equal([])
    expect(newState.selectedReview).to.equal(review)
  })
})
