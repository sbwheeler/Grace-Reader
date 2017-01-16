import React, { Component } from 'react';
import { Link } from 'react-router';
import store from '../store'
import setGenre from './book-actions'


export default class GenresComponent extends Component {
  constructor(props) {
    super(props);
    this.setGenre = this.setGenre.bind(this);
  }

  setGenre(genre) {
    store.dispatch(setGenre(genre))
  }

  render() {
    const genres = [];
    const arrayOfBookGenres = this.props.allBooks.map(book => book.genre)
    arrayOfBookGenres.forEach(genreArray => {
      genreArray.forEach(genre => {
        if (genres.indexOf(genre) === -1) genres.push(genre)
      })
    })

    return (
      <div>
        <h1 id="booklisttitle">Shop by Category</h1>
        <Link to="/cart"> Shopping Cart </Link>
        <div className="row">
          {
            this.props.allBooks && genres.map(genre => (
              <div className="col-xs-2" key={genre}>
                <Link className="thumbnail" onClick={this.setGenre(genre)} to={`/books`}>
                  <div className="caption">
                    <h5>
                      <strong>{ genre }</strong>
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
