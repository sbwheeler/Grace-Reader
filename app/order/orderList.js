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
              <Link to={`/orderList/${order[0].selectedBooks.order_id}`} key={order[0].selectedBooks.order_id}>
                <h4>Date: {order[0].selectedBooks.created_at.slice(0, order[0].selectedBooks.created_at.indexOf('T'))}</h4>
                <h4>{(order.map(book => book.selectedBooks.quantity).reduce((a, b) => a + b))} Books Total: </h4>
                <ul>{ order.map(book => (
                      <li key={book.id}> {book.title} </li>
                    )) }
                </ul>
                <h4 id="price">${order.map(book => book.price * book.selectedBooks.quantity).reduce((a, b) => a + b).toFixed(2)} </h4>
                <hr></hr>
              </Link>
            ))
          }
        </div>
      </div>
    )
  }
}



export default OrderListComponent;
