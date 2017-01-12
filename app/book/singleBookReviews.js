import React from 'react';

const SingleBookReviews = ({ reviews }) => {
  return (
    <div>
      {
        reviews && reviews.map(review => (
         <div>
            <h5>{review.rating}</h5>
            <p>{review.content}</p>
         </div>
        ))
      }
    </div>
  )
}

export default SingleBookReviews;
