import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class SingleOrder extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const order = this.props.currentOrder.selected

    return (
      <div>
        {order && order.map((item,idx) => {
          return (
            <div key={item.id}>
              <h3>Price: {item.price}</h3>
              <h3>Price: {item.quantity}</h3>
            </div>
          )})
        }
        {order && <h3>Total : {this.props.currentOrder.total}</h3> }
      </div>
    )
  }
}

export default SingleOrder;
