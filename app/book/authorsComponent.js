import React, { Component } from 'react';
import { Link } from 'react-router';
import store from '../store';
import { selectBooks } from './book-actions';


export default class AuthorsComponent extends Component {
  constructor(props) {
    super(props);
    this.setSelectedBooks = this.setSelectedBooks.bind(this);
  }

  setSelectedBooks (author) {
    event.preventDefault();
    const filteredBooks = this.props.allBooks.filter(book => {
      if (book.author === author){
        return book
      }
    })
    store.dispatch(selectBooks(filteredBooks))
  }

  render() {

    const arrayOfAuthors = this.props.allBooks.map(book => book.author)

    let filteredAuthors = arrayOfAuthors.filter((author, i) => arrayOfAuthors.indexOf(author) === i
    )

    return (
      <div>
        <h1 id="authornamelist"> Authors </h1>
        <div className="row">
          {
            this.props.allBooks && filteredAuthors.map(author => (
                <div className="col xs-6 col-sm4 col-md-3 col-lg-2 list-item" onClick={() => this.setSelectedBooks(author)} key={author}>
                <Link className="thumbnail"  to={`/authorsbooks`}>
                  <div className="caption">
                    <h5>
                      <strong>{ author }</strong>
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
