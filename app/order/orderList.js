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
      <h3>Your Orders</h3>
        <h5>{orders.length} Orders Placed</h5>
        <br/>
          { orders && orders.map(order => (
            <div className="row" key={order.id}>
              <hr/>
              <div key={order[0].selectedBooks.order_id} className="col-md-12 col-sm-12 col-lg-12">
                  <h4>Order Placed On {order[0].selectedBooks.created_at.slice(0, order[0].selectedBooks.created_at.indexOf('T'))}</h4>
                  <h5>{(order.map(book => book.selectedBooks.quantity).reduce((a, b) => a + b))} Copies Total: </h5>
                  { order.map(book => (
                        <div key={book.id} className="col-xs-2">
                          <p>{book.title}</p>
                          <img style={{"height": "100px"}}src={ book.imageUrl } />
                        </div>
                      )) }
                  <br/>
                  <p id="price">${order.map(book => book.price * book.selectedBooks.quantity).reduce((a, b) => a + b).toFixed(2)} Total</p>
                <Link to={`/orderList/${order[0].selectedBooks.order_id}`}>Order Details</Link>
                </div>
             </div>
            ))
          }
      </div>
    )
  }
}



export default OrderListComponent;
