import { connect } from 'react-redux';
import SingleOrder from './singleOrder';
import store from '../store';

function mapStateToProps(state) {
  return {
    currentOrder: state.orders.currentOrder
  };
}

function mapDispatchToProps(state) {
  return {};
}

const SingleOrderContainer = connect(mapStateToProps, mapDispatchToProps)(SingleOrder);

export default SingleOrderContainer;
