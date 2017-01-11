import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class SingleOrder extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const order = this.props.currentOrder;

    return (
      <div>
        <h1>{order.total}</h1>
        <div>
        </div>
      </div>
    )
  }
}

export default SingleOrder;
