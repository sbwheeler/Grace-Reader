import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class SingleOrder extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let date;
    return (
      <div>
        { this.props.currentOrder.length ?
            <div>
              <h4> Order Placed On: {this.props.currentOrder[0].created_at.slice(0, this.props.currentOrder[0].created_at.indexOf('T')) }</h4>
              <h4>${this.props.currentOrder.map(book => book.price * book.selectedBooks.quantity).reduce((a, b) => a + b)}</h4>
              <hr/>
            </div>
          :
            <div></div>
        }

        {
          this.props.currentOrder && this.props.currentOrder.map((book,idx) => {
            date = book.created_at
          return (
            <div key={book.id}>
              <h4>{book.title}</h4>
              <img src={book.imageUrl} width="150" height="150"></img>
              <h4>${book.price}</h4>
              <h4>{book.selectedBooks.quantity === 1 ? <p>{book.selectedBooks.quantity} Copy</p> : <p>{book.selectedBooks.quantity} Copies</p>}</h4>
              <h4>Total Cost: {book.price * book.selectedBooks.quantity}</h4>
              <hr></hr>
            </div>
          )})
        }
      </div>
    )
  }
}

export default SingleOrder;
