import { connect } from 'react-redux';
import ShoppingCartComponent from './ShoppingCartComponent';
import store from '../store';

function mapStateToProps(state) {
  return {
    shoppingCart: state.orders.shoppingCart
  };
}

const ShoppingCartContainer = connect(mapStateToProps)(ShoppingCartComponent);

export default ShoppingCartContainer;
