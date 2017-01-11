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
      <div>
      <h1>BOOK LIST</h1>
        <div>
        {
          books && books.map(book => (
            <div key={ book.id }>
              <Link to={`/books/${book.id}`}>
                <img src={ book.imageUrl } />
                <div >
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
}
export default BookListComponent;
