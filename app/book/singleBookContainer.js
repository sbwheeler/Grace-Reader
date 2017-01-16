import { connect } from 'react-redux';
import SingleBookComponent from './singleBookComponent';
import store from '../store';

function mapStateToProps(state) {
  return {
    currentBook: state.books.currentBook
  };
}

const SingleBookContainer = connect(mapStateToProps)(SingleBookComponent);

export default SingleBookContainer;
