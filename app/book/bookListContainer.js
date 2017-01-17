import { connect } from 'react-redux';
import BookListComponent from './bookListComponent';
import store from '../store';

function mapStateToProps(state) {
  return {
    allBooks: state.books.allBooks,
    genre: state.books.currentGenre
  };
}

const BookListContainer = connect(mapStateToProps)(BookListComponent);

export default BookListContainer;
