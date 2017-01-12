import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const SingleReviewComponent = (props) => {
  return (
    <div>
      <StarRatingComponent
        name="rate1"
        editing={false}
        starCount={5}
        value={props.rating} />
      <p>{ props.content }</p>
    </div>
  )
}

export default SingleReviewComponent;
