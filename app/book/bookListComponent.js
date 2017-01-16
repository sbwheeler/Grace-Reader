import React from 'react';
import { Link } from 'react-router';


const BookListComponent = ({ allBooks }) => {
    return (
      <div>
        <h1 id="booklisttitle">Our Books</h1>
        <Link to="/cart"> Shopping Cart </Link>
        <div className="row">
          {
            allBooks && allBooks.map(book => (
              <div className="col-xs-2" key={ book.id }>
                <Link className="thumbnail" to={`/books/${book.id}`}>
                  <img src={ book.imageUrl } width="150"/>
                  <div className="caption">
                    <h5>
                      <strong>{ book.title }</strong>
                      <br/>
                      <span>By { book.author }</span>
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
