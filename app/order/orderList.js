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
          {
            orders && orders.map(order => (
              <Link to={`/orderList/${order.id}`} key={ order.id }>
                {
                  order.map(book => {
                    return (
                      <div key={book.id}>
                        <h3>Price: {book.price}</h3>
                        <h3>Quantity: {book.selectedBooks.quantity}</h3>
                        <h3 id="price">Order Total: {book.price * book.selectedBooks.quantity} </h3>
                        <hr></hr>
                      </div>
                    )
                  })
                }
              </Link>
            ))
          }
        </div>
      </div>
    )
  }
}

export default OrderListComponent;
