import { connect } from 'react-redux';
import SelectedAuthorsComponent from './SelectedAuthorsComponent';
import store from '../store';

function mapStateToProps(state) {
  return {
    allBooks: state.books.allBooks,
    selectedBooks: state.books.selectedBooks
  };
}

const SelectedAuthorsContainer = connect(mapStateToProps)(SelectedAuthorsComponent);

export default SelectedAuthorsContainer;
