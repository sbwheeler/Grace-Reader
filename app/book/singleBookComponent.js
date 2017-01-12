import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SingleBookReviews from './singleBookReviews'


const SingleBookComponent = ({ currentBook }) => {
    console.log(currentBook.reviews);
  return (
    <div className="currentBook">
      <div>
        <h3>{currentBook.title}</h3>
        <div>{currentBook.author}</div>
        <img src={currentBook.imageUrl} className="img-thumbnail" />
      </div>
      <h3>REVIEWS</h3>
      <SingleBookReviews reviews={currentBook.reviews} />
    </div>
  )
}

export default SingleBookComponent;
