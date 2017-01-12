import axios from 'axios';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveReviews = reviews => {
  return {
    type: RECEIVE_REVIEWS,
    reviews
  }
}

export const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  }
}

// -------------- axios request using thunk

// doesn't exist in backend routes yet
export const getReviewById = reviewId => dispatch => {
  axios.get(`/api/reviews/${reviewId}`)
    .then(res => res.data)
    .then(data => dispatch(receiveReview(data)))
}

export const getAllReviews = () => dispatch => {
  axios.get('/api/reviews/')
    .then(res => res.data)
    .then(data => dispatch(receiveReviews(data)))
}
