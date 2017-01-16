import React from 'react';
import { connect } from 'react-redux';
import SingleReviewComponent from './singleReviewComponent';

const mapStateToProps = (state, getState) => {
  return {
    selectedReview: state.reviews.selectedReview
  }
}

export default connect(mapStateToProps)(SingleReviewComponent)
