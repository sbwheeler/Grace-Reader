import React from 'react';
import { connect } from 'react-redux';
import SingleReviewComponent from './singleReviewComponent';

const mapStateToProps = (state, getState) => {
  return {
    selectedReview: state.reviews.selectedReview
  }
}

// EI: either add methods or take this out
const mapDispatchToProps = (dispatch, getState) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleReviewComponent)
