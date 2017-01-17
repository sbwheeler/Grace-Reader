import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class OrderListComponent extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const orders = this.props.allOrders;
    console.log('ORDERS: ', orders)
    return (
      <div>
      <h1>Order LIST</h1>
        <div>
          { orders && orders.map(order => (
              <Link to={`/orderList/${order[0].selectedBooks.order_id}`} key={order[0].selectedBooks.order_id}>
                <h3>Date: {order[0].selectedBooks.created_at.slice(0, order[0].selectedBooks.created_at.indexOf('T'))}</h3>
                <h3>Quantity: {(order.map(book => book.selectedBooks.quantity).reduce((a, b) => a + b))}</h3>

                <hr></hr>
              </Link>
            ))
          }
        </div>
      </div>
    )
  }
}


 // <h3 id="price">Order Total: {book.price * book.selectedBooks.quantity} </h3>
export default OrderListComponent;
