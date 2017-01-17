import React from 'react';
import { Link } from 'react-router';


const BookListComponent = ({ allBooks, genre, author }) => {
  //filtering books by the genre currently on the state, if there is no genre, display all books
  let books;
  if (genre === '') books = allBooks;
  else if (allBooks) {
    books = allBooks.filter(book => {
      return book.genre.includes(genre)
    })
  }
  console.log('~~~~~~~~~~~~~AUTHOR', author)
  return (
    <div>
      <h1 id="booklisttitle">Our Books</h1>
      <Link to="/cart"> Shopping Cart </Link>
      <div className="row">
        {
          books && books.map(book => (
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 list-item" key={ book.id }>
              <Link className="thumbnail" to={`/books/${book.id}`}>
                <img src={ book.imageUrl } style={{'height' : '170px'}}/>
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
