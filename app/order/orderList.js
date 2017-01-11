import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class OrderListComponent extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const orders = this.props.total;

    return (
      <div>
      <h1>Order LIST</h1>
        <div>
        {
          orders && orders.map(order => (
            <div key={ order.id }>
              <Link to={`/orders/${order.id}`}>
                <div >
                  <h5>
                    <span>Total is { order.total }</span>
                  </h5>
                </div>
              </Link>
            </div>
          ))
        }
        </div>
      </div>
    )
  }
}

export default OrderListComponent;
