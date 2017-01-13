import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const SingleReviewComponent = ({ selectedReview }) => {
  return (
    <div>
      <StarRatingComponent
        name="rate1"
        editing={false}
        starCount={5}
        value={selectedReview.rating}
        renderStarIcon={(index, value) => {
          return <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />;
        }}
        renderStarIconHalf={() => <span className="fa fa-star-half-full" />}
         />
      <p>{ selectedReview.content }</p>
    </div>
  )
}

export default SingleReviewComponent;
