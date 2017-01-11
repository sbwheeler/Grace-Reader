import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from './reviewActionCreator';

const reviewsInitialState = {
  selected: {},
  list: []
}

export default reducer = (state = reviewsInitialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_REVIEW:
      newState.selected = action.receiveReview;
      break;
    case RECEIVE_REVIEWS:
      newState.list = action.receiveReviews;
      break;
    default:
      return state;
  }

  return newState;
}
