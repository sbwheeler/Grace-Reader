import { connect } from 'react-redux';
import BookListComponent from './bookListComponent';
import store from '../store';

function mapStateToProps(state) {
  return {
    allBooks: state.books.allBooks
  };
}

// EI: don't need to pass in a mapDispatchToProps function if you don't need to map any methods; optional argument

function mapDispatchToProps(state) {
  return {};
}
const BookListContainer = connect(mapStateToProps, mapDispatchToProps)(BookListComponent);

export default BookListContainer;
