import React from 'react';
import { Link } from 'react-router'

const SingleBookReview = ({ review }) => {
  return (
    <div>
      <p>{review.rating}: {review.content}</p>
    </div>
  )
}

export default SingleBookReview;
