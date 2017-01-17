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
        {
          this.props.currentOrder && this.props.currentOrder.map((book,idx) => {
            date = book.created_at
          return (
            <div key={book.id}>
              <h3>Title: {book.title}</h3>
              <img src={book.imageUrl} width="150" height="150"></img>
              <h3>Genre: {book.genre}</h3>
              <h3>Price: {book.price}</h3>
              <h3>Quantity: {book.selectedBooks.quantity}</h3>
              <h3>Total : {book.price * book.selectedBooks.quantity}</h3>
              <hr></hr>
            </div>
          )})
        }
        <h3>Order Placed On : {date}</h3>
      </div>
    )
  }
}

export default SingleOrder;
