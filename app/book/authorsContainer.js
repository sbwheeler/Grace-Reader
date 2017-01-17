import { connect } from 'react-redux';
import AuthorsComponent from './authorsComponent';
import store from '../store';

function mapStateToProps(state) {
  return {
    allBooks: state.books.allBooks
  };
}

const AuthorsContainer = connect(mapStateToProps)(AuthorsComponent);

export default AuthorsContainer;
