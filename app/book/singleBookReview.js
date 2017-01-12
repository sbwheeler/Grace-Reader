import React from 'react';
import { Link } from 'react-router'
import StarRatingComponent from 'react-star-rating-component'

const SingleBookReview = ({ review }) => {
  return (
    <div>
      <StarRatingComponent
        name="rate1"
        editing={false}
        starCount={5}
        value={review.rating} />
      <span>   {review.content}</span>
    </div>
  )
}

export default SingleBookReview;
