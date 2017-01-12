import { connect } from 'react-redux';
import OrderList from './orderList';
import store from '../store';

function mapStateToProps(state) {
  return {
    allOrders: state.orders.allOrders
  };
}

function mapDispatchToProps(state) {
  return {};
}
const OrderListContainer = connect(mapStateToProps, mapDispatchToProps)(OrderList);

export default OrderListContainer;
