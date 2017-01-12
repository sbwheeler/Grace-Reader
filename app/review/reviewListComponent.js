import React from 'react';
import SingleReviewComponent from './singleReviewComponent';
import { Link } from 'react-router';

const ReviewListComponent = ({ reviews }) => {
  return (
    <div>
      { reviews && reviews.map(review => {
        return (
          <Link to={`/review/${review.id}`}>
            <SingleReviewComponent key={review.id} rating={reviews.rating} content={reviews.content} />
          </Link>
        )
      })}
    </div>
  )
}

export default ReviewListComponent;
