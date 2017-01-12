import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class BookListComponent extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const books = this.props.allBooks;
    return (
      <div className="row">
        <h1>BOOK LIST</h1>
          <ul>
          {
            books && books.map(book => (
              <div className="col-xs-4" key={ book.id }>
                <Link className="thumbnail" to={`/books/book/${book.id}`}>
                  <img src={ book.imageUrl } />
                  <div className="caption">
                    <h5>
                      <span>{ book.title }</span>
                    </h5>
                  </div>
                </Link>
              </div>
            ))
          }
        </ul>
    </div>
  )
  }
}
export default BookListComponent;
