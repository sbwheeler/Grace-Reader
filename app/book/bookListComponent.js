import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class BookListComponent extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const books = this.props.allBooks;
    console.log(books)
    return (
      <div className="container-fluid">
        <h1>BOOK LIST</h1>
          <ul className="row-fluid">
          {
            books && books.map(book => (
              <li key={ book.id }>
                <Link to={`/books/${book.id}`}>
                  <img src={ book.imageUrl } />
                  <div >
                    <h5>
                      <span>{ book.name }</span>
                    </h5>
                  </div>
                </Link>
              </li>
            ))
          }
          </ul>
      </div>
    )
  }
}
export default BookListComponent;
