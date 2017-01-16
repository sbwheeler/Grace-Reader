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
                  order.selected.map(purchases => {
                    return (
                      <div key={purchases.id}>
                        <h3>Price: {purchases.price}</h3>
                        <h3>Quantity: {purchases.quantity}</h3>
                      </div>
                    )
                  })
                }
                <h3 id="price">Order Total: {order.total}</h3>
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
