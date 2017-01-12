import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


const SingleBookComponent = ({ currentBook }) => {
  return (
    <div className="currentBook">
      <div>
        <h3>{currentBook.title}</h3>
        <div>{currentBook.author}</div>
        <img src={currentBook.imageUrl} className="img-thumbnail" />
      </div>
    </div>
  )
}

export default SingleBookComponent;
