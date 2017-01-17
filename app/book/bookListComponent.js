import React from 'react';
import { Link } from 'react-router';


const BookListComponent = ({ allBooks, genre }) => {
  //filtering books by the genre currently on the state, if there is no genre, display all books
  let books;
  if (genre === '') books = allBooks;
  else if (allBooks) {
    books = allBooks.filter(book => {
      return book.genre.includes(genre)
    })
  }

  return (
    <div>
      <h2 id="booklisttitle">Our Books</h2>
      <div className="row">
        {
          books && books.map(book => (
            <div className="col-xs-2" key={ book.id }>
              <Link className="thumbnail" to={`/books/${book.id}`}>

                <img src={ book.imageUrl } />
                <div className="caption" >

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
