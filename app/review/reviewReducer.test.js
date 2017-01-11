import { expect } from 'chai';
import reducer from './reviewReducer';
import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from './reviewActionCreator';

describe('Review Reducers', () => {
  it('should return the initial state if no action is passed in', () => {
    const initialState = reducer(undefined, {type: 'jibberish'})
    expect(initialState).to.deep.equal({ selected: '', list: [] })
  })

  it('should return the correct state', () => {
    const selectedReview = 'something something something'
    const actionForOne = {type: RECEIVE_REVIEW, review: selectedReview }
    const newStateSelectedChanged = reducer(undefined, actionForOne)

    expect(newStateSelectedChanged.selected).to.equal(selectedReview)

    const manyReviews = ['', 'sdadasd', '1231231']
    const actionForMany = {type: RECEIVE_REVIEWS, reviews: manyReviews }
    const newStateListChanged = reducer(undefined, actionForMany)

    expect(newStateListChanged.list).to.deep.equal(manyReviews)
  })
})
