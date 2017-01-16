import React, { Component } from 'react';
import { connect } from 'react-redux'; //EI: you're not using this here
import { Link } from 'react-router';

// EI: React file naming conventions: components are capitalized

// EI: this could just be a dumb component
class BookListComponent extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const books = this.props.allBooks;
    return (
      <div>
        <h1>BOOK LIST</h1>
        <Link to='/newbook'> Add New Book </Link>
        <div className="row">
          {
            books && books.map(book => (
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
}
export default BookListComponent;
