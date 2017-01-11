import React from 'react';
import { connect } from 'react-redux';
import ReviewListComponent from './reviewListComponent';

const mapStateToProps = (state, getState) => {
  return {
    reviews: state.allReviews
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewListComponent)
