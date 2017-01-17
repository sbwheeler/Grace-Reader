import React, { Component } from 'react';
import { Link } from 'react-router';
import store from '../store';
import { selectBooks } from './book-actions';


export default class AuthorsComponent extends Component {
  constructor(props) {
    super(props);
    this.imageLinks = ['http://img06.deviantart.net/f292/i/2010/137/d/e/open_book_stock_by_rustymermaid_stock.jpg', 'http://www.youthactionproject.org/wp-content/uploads/2014/06/11.-Boeken.jpg', 'https://i.ytimg.com/vi/bC0hewvmAQQ/maxresdefault.jpg', 'http://previews.123rf.com/images/baloncici/baloncici0708/baloncici070800009/1367546-Whole-big-wall-covered-with-lot-of-books-Stock-Photo-books-library-book.jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Bookshelf.jpg', 'http://kirbymuseum.org/blogs/dynamics/wp-content/uploads/sites/10/2013/03/bookshelf-1.jpg', 'https://s-media-cache-ak0.pinimg.com/736x/fc/7d/57/fc7d5721e85f9e16cba7d075ed5a890b.jpg']
    this.setSelectedBooks = this.setSelectedBooks.bind(this);
  }

  setSelectedBooks (author) {
    event.preventDefault();
    const filteredBooks = this.props.allBooks.filter(book => {
      if(book.author === author){
        return book
      }
    })
    store.dispatch(selectBooks(filteredBooks))
  }

  render() {
    //potentially use for dropdown genre menu in nav bar?
    //this is pulling the unique genres from the list of all of our books
    const arrayOfAuthors = this.props.allBooks.map(book => book.author)
    // console.log('~~~~~~~~~~~~~~~~~~ARRAYAUTHORS', arrayOfAuthors)
    let filteredAuthors = arrayOfAuthors.filter((author, i) => arrayOfAuthors.indexOf(author) === i
    )


    console.log('~~~~~~~~AUTHORS~~~~~~', filteredAuthors);
    console.log('~~~~~~~~~~~~~~~~~~BOOKS', this.props.allBooks)
    console.log('~~~~~~~~~~~~~~~BOOKSBYAUTHOR', )

    return (
      <div>
        <h1 id="authornamelist"> Authors </h1>
        <ul className="list-group">
          {
            this.props.allBooks && filteredAuthors.map(author => (
              <li className="list-group-item" onClick={() => this.setSelectedBooks(author)} key={author}>
                <Link className="thumbnail"  to={`/books`}>
                <img src={ this.imageLinks[Math.floor(Math.random() * (this.imageLinks.length))] } width="150" />
                  <div className="caption">
                    <h5>
                      <strong>{ author }</strong>
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
