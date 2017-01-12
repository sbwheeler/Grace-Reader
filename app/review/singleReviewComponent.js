import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const SingleReviewComponent = ({ selectedReview }) => {
  return (
    <div>
      <StarRatingComponent
        name="rate1"
        editing={false}
        starCount={5}
        value={selectedReview.rating} />
      <p>{ selectedReview.content }</p>
    </div>
  )
}

export default SingleReviewComponent;
