import React from 'react';

const SingleReviewComponent = (props) => {
  return (
  <div>
    <h3>Rating { props.rating }</h3>
    <p>{ props.content }</p>
  </div>
  )
}

export default SingleReviewComponent;
