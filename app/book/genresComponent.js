import React, { Component } from 'react';
import { Link } from 'react-router';
import store from '../store'
import { setGenre } from './book-actions'


export default class GenresComponent extends Component {
  constructor(props) {
    super(props);
    this.imageLinks = ['http://img06.deviantart.net/f292/i/2010/137/d/e/open_book_stock_by_rustymermaid_stock.jpg', 'http://www.youthactionproject.org/wp-content/uploads/2014/06/11.-Boeken.jpg', 'https://i.ytimg.com/vi/bC0hewvmAQQ/maxresdefault.jpg', 'http://previews.123rf.com/images/baloncici/baloncici0708/baloncici070800009/1367546-Whole-big-wall-covered-with-lot-of-books-Stock-Photo-books-library-book.jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Bookshelf.jpg', 'http://kirbymuseum.org/blogs/dynamics/wp-content/uploads/sites/10/2013/03/bookshelf-1.jpg', 'https://s-media-cache-ak0.pinimg.com/736x/fc/7d/57/fc7d5721e85f9e16cba7d075ed5a890b.jpg']
    this.setGenre = this.setGenre.bind(this);
  }

  setGenre(genre) {
    event.preventDefault();
    store.dispatch(setGenre(genre))
  }

  render() {
    //potentially use for dropdown genre menu in nav bar?
    //this is pulling the unique genres from the list of all of our books
    const genres = [];
    const arrayOfBookGenres = this.props.allBooks.map(book => book.genre)
    arrayOfBookGenres.forEach(genreArray => {
      genreArray.forEach(genre => {
        if (genres.indexOf(genre) === -1) genres.push(genre)
      })
    })

    return (
      <div>
        <h1 id="booklisttitle"> by Category</h1>
        <Link to="/cart"> Shopping Cart </Link>
        <div className="row">
          {
            this.props.allBooks && genres.map(genre => (
              <div className="col-xs-2" onClick={() => this.setGenre(genre)} key={genre}>
                <Link className="thumbnail"  to={`/books`}>
                <img src={ this.imageLinks[Math.floor(Math.random() * (this.imageLinks.length))] } width="150"/>
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
