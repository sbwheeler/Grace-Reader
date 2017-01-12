import { connect } from 'react-redux';
import AllUsersComponent from './AllUsersComponent';
import store from '../store';

function mapStateToProps(state) {
  return {
    users: state.users.allUsers
  };
}

function mapDispatchToProps(state) {
  return {};
}
const AllUsersContainer = connect(mapStateToProps, mapDispatchToProps)(AllUsersComponent);

export default AllUsersContainer;
