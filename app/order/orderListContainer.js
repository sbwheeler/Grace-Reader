import { connect } from 'react-redux';
import OrderList from './orderList';
import store from '../store';

function mapStateToProps(state) {
  return {
    allOrders: state.orders.allOrders
  };
}

// EI: same thing here; could take this out if you dont' have methods to map
function mapDispatchToProps(state) {
  return {};
}
const OrderListContainer = connect(mapStateToProps, mapDispatchToProps)(OrderList);

export default OrderListContainer;
