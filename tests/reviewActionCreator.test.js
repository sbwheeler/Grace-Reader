import { expect } from 'chai';
import { RECEIVE_REVIEWS, RECEIVE_REVIEW, receiveReviews, receiveReview} from 'APP/app/review/reviewActionCreator'

describe('Review Action Creators', () => {
  describe('receiveReviews', () => {
    it('should return the correct object', () => {
      const reviews = [
        {rating: 3.5, content: 'This is some content. More content'},
        {rating: 4.5, content: 'This is some content. More content. More content.'},
        {rating: 2.5, content: 'This is some content. More content. More content. More content'}
      ]

      const newAction = receiveReviews(reviews)
      expect(newAction.type).to.deep.equal(RECEIVE_REVIEWS)
      expect(newAction.reviews).to.deep.equal(reviews)
    })
  })

  describe('receiveReview', () => {
    it('should return the correct object', () => {
      const review = 'Some praise for a movie. Then some faults with the movie because I am an expert in movies. More criticism. Then more praise.'

      const newAction = receiveReview(review);
      expect(newAction.type).to.deep.equal(RECEIVE_REVIEW)
      expect(newAction.review).to.deep.equal(review)
    })
  })
})
