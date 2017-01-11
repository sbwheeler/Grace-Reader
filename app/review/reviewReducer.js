import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from './reviewActionCreator';

const reviewsInitialState = {
  selected: '',
  list: []
}

export default (state = reviewsInitialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_REVIEW:
      newState.selected = action.review;
      break;
    case RECEIVE_REVIEWS:
      newState.list = action.reviews;
      break;
    default:
      return state;
  }

  return newState;
}
