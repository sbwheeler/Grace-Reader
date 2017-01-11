import { connect } from 'react-redux';
import SingleBookComponent from './singleBookComponent';
import store from '../store';

function mapStateToProps(state) {
  return {
    currentBook: state.currentBook
  };
}

function mapDispatchToProps(state) {
  return {};
}
const SingleBookContainer = connect(mapStateToProps, mapDispatchToProps)(SingleBookComponent);

export default SingleBookContainer;
