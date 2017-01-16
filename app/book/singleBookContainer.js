import { connect } from 'react-redux';
import SingleBookComponent from './singleBookComponent';
import store from '../store';

function mapStateToProps(state) {
  return {
    currentBook: state.books.currentBook
  };
}

// EI: don't need to pass this in if you don't have any methods to map
function mapDispatchToProps(state) {
  return {};
}
const SingleBookContainer = connect(mapStateToProps, mapDispatchToProps)(SingleBookComponent);

export default SingleBookContainer;
