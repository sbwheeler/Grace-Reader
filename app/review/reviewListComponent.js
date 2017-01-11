import React from 'react';
import SingleReviewComponent from './singleReviewComponent';

const ReviewListComponent = ({ reviews }) => {
  return (
    <div>
      { reviews && reviews.map(review => {
        return (
          <SingleReviewComponent key={review.id} rating={reviews.rating} content={reviews.content} />
        )
      })}
    </div>
  )
}

export default ReviewListComponent;
