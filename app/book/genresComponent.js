import React, { Component } from 'react';
import { Link } from 'react-router';
import store from '../store'
import { setGenre } from './book-actions'


export default class GenresComponent extends Component {
  constructor(props) {
    super(props);
    this.imageLinks = {
      Fantasy: 'http://hopeofglory.typepad.com/.a/6a00d83451d62469e2016302e0ee2f970d-pi',
      Epic: 'https://i.ytimg.com/vi/3TAUnYZpMbA/0.jpg',
      'Science Fiction' : 'https://s-media-cache-ak0.pinimg.com/originals/d2/c1/79/d2c17900b9df2140d3d3c4d9e1a2c5d2.jpg',
      'Computer Science' : 'http://casanovainfo.com/wp-content/uploads/2016/07/hardware.jpg',
      'Postmodern' : 'http://kingofwallpapers.com/postmodern/postmodern-002.jpg',
      Adventure: 'http://www.clker.com/cliparts/S/d/G/r/8/W/category-genre-adventure-md.png',
      Western: 'http://2.bp.blogspot.com/-efdQ7LMDUKs/UgarLFHogUI/AAAAAAAABGE/MmV_mdYk_MI/s1600/western%C2%A0pictures9.jpg',
      default: 'http://www.thenatterbox.com/wp-content/uploads/2015/10/Book-stock-photo.jpg'
    }
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
              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 list-item" onClick={() => this.setGenre(genre)} key={genre}>
                <Link className="thumbnail"  to={`/books`}>
                <img src={ this.imageLinks[genre] ? this.imageLinks[genre] : this.imageLinks['default']} width="150"/>
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
