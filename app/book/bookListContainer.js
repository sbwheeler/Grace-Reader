import { connect } from 'react-redux';
import BookList from './bookListComponent';
import store from '../store';

function mapStateToProps(state) {
  return {
    allBooks: state.allBooks
  };
}

function mapDispatchToProps(state) {
  return {};
}
const BookListContainer = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default BookListContainer;
