import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const BookListComponent = ({ books }) => {
  return (
    <div>
      <h1>BOOK LIST</h1>
        <div className="row">
          {
            books && books.map(book => (
              <div className="col-xs-4" key={ book.id }>
                <Link className="thumbnail" to={`/books/${book.id}`}>
                  <img src={ book.imageUrl } />
                  <div className="caption">
                    <h5>
                      <span>{ book.name }</span>
                    </h5>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
    </div>
  )
}
export default BookListComponent;
