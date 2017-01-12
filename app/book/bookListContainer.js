import { connect } from 'react-redux';
import BookListComponent from './bookListComponent';
import store from '../store';

function mapStateToProps(state) {
  return {
    books: state.allBooks,
    allBooks: state.books.allBooks
  };
}

function mapDispatchToProps(state) {
  return {};
}
const BookListContainer = connect(mapStateToProps, mapDispatchToProps)(BookListComponent);

export default BookListContainer;
