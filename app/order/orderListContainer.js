import { connect } from 'react-redux';
import OrderList from './orderList';
import store from '../store';

function mapStateToProps(state) {
  return {
    allOrders: state.orders.allOrders
  };
}

const OrderListContainer = connect(mapStateToProps)(OrderList);

export default OrderListContainer;
