import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SingleBookReview from './singleBookReview'
import StarRatingComponent from 'react-star-rating-component'


const SingleBookComponent = ({ currentBook }) => {
  return (
    <div className="currentBook">
      <div>
        <h3>{currentBook.title}</h3>
        <div>{currentBook.author}</div>
        <div>
        <StarRatingComponent
          name="rate1"
          editing={false}
          starCount={5}
          value={currentBook.reviews && currentBook.reviews.map(review => review.rating).reduce((a, b) => { return a + b;}, 0) / currentBook.reviews.length}
          renderStarIconHalf={() => <span className="fa fa-star-half-full" />}
        />
        </div>
        <img src={currentBook.imageUrl} className="img-thumbnail" />
      </div>
      <h3>REVIEWS</h3>
      {
        currentBook.reviews && currentBook.reviews.map(review => (
          <div key={review.id}>
            <Link to={`/reviews/${review.id}`}>
              <SingleBookReview review={review} />
            </Link>
          </div>
          ))
      }
    </div>
  )
}

export default SingleBookComponent;
