import React from 'react';
import { Link } from 'react-router';


const SelectedAuthors = ({ allBooks, genre, selectedBooks }) => {
  //filtering books by the genre currently on the state, if there is no genre, display all books
  let books;
  if (selectedBooks === []) books = allBooks
  else {
    books = selectedBooks
  }


  return (
    <div>
      <h1 id="authorsbooks">Books</h1>
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

export default SelectedAuthors;
