import { connect } from 'react-redux';
import SingleUserComponent from './singleUserComponent';
import store from '../store';

function mapStateToProps(state) {
  return {
    currentUser: state.users.currentUser
  };
}

function mapDispatchToProps(state) {
  return {};
}
const SingleUserContainer = connect(mapStateToProps, mapDispatchToProps)(SingleUserComponent);

export default SingleUserContainer;
