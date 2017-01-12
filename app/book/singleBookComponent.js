import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


const SingleBookComponent = ({ book }) => {
  return (
    <div className="book">
      <div>
        <h3>{book.title}</h3>
        <div>{book.author}</div>
        <img src={book.imageUrl} className="img-thumbnail" />
      </div>
    </div>
  )
}

export default SingleBookComponent;
