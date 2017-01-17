import { connect } from 'react-redux';
import AuthorsComponent from './authorsComponent';
import store from '../store';

function mapStateToProps(state) {
  return {
    allBooks: state.books.allBooks,
    selectedBooks: state.books.selectedBooks
  };
}

const AuthorsContainer = connect(mapStateToProps)(AuthorsComponent);

export default AuthorsContainer;
