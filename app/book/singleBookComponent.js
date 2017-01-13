import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SingleBookReview from './singleBookReview'

const SingleBookComponent = ({ currentBook }) => {
  return (
    <div className="currentBook">
      <Link to="/">
        <button className="btn btn-primary pull-right">
          Home Page
        </button>
      </Link>
        <img src={currentBook.imageUrl} className="img-thumbnail" />
        <h3>Title: {currentBook.title}</h3>
        <div>Author: {currentBook.author}</div>
        <div>Description: {currentBook.description}</div>
        <div>Genre: {currentBook.genre}</div>
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
