import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from './reviewActionCreator';

const reviewsInitialState = {
  selectedReview: '',
  allReviews: []
}

export default (state = reviewsInitialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_REVIEW:
      newState.selectedReview = action.review;
      break;
    case RECEIVE_REVIEWS:
      newState.allReviews = action.reviews;
      break;
    default:
      return state;
  }

  return newState;
}
