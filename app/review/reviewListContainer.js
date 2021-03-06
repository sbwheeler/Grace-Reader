import React from 'react';
import { connect } from 'react-redux';
import ReviewListComponent from './reviewListComponent';

const mapStateToProps = (state, getState) => {
  return {
    reviews: state.reviews.allReviews
  }
}

export default connect(mapStateToProps)(ReviewListComponent)
