import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class OrderListComponent extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const orders = this.props.allOrders;

    return (
      <div>
      <h1>Order LIST</h1>
        <div>
          { orders && orders.map(order => (
              order.map(book => {
                return (
                  <Link to={`/orderList/${book.selectedBooks.order_id}`} key={book.selectedBooks.order_id}>
                    <h3>Date: {book.created_at}</h3>
                    <h3>Quantity: {book.selectedBooks.quantity}</h3>
                    <h3 id="price">Order Total: {book.price * book.selectedBooks.quantity} </h3>
                    <hr></hr>
                  </Link>
                )
              })
            ))
          }
        </div>
      </div>
    )
  }
}

export default OrderListComponent;
