import React, { Component } from 'react';
import { Link } from 'react-router';


const BookListComponent = ({ allBooks }) => {
    return (
      <div>
        <h1>BOOK LIST</h1>
        <Link to='/newbook'> Add New Book </Link>
        <div className="row">
          {
            allBooks && allBooks.map(book => (
              <div className="col-xs-2" key={ book.id }>
                <Link className="thumbnail" to={`/books/${book.id}`}>
                  <img src={ book.imageUrl } height="300" width="200"/>
                  <div className="caption">
                    <h5>
                      <span>{ book.title }</span>
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
