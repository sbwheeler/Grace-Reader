import React, { Component } from 'react';
import { Link } from 'react-router';
import { orderShoppingCart } from './order-actions'
import store from '../store'


export default class ShoppingCartComponent extends Component {
  constructor(props) {
    super(props)
    this.orderCart = this.orderCart.bind(this)
  }

  orderCart() {
    event.preventDefault();
    store.dispatch(orderShoppingCart(this.props.user.id))
  }

  render () {
      return (
        <div>
          <h1>Your Shopping Cart</h1>
            {
              this.props.shoppingCart && this.props.shoppingCart.map(book => (
                <div className="col-xs-2" key={ book.id }>
                  <Link className="thumbnail" to={`/books/${book.id}`}>
                    <img src={ book.imageUrl } height="300" width="200"/>
                    <div className="caption">
                      <h5>
                        <span>{ book.title }</span>
                        <span>{ book.author }</span>
                        <span>{ book.price }</span>
                        <span>{ book.selectedBooks.quantity }</span>
                        <span>Total price: { book.price * book.selectedBooks.quantity }</span>
                      </h5>
                    </div>
                  </Link>
                </div>
              ))
            }
            <button type="submit" className="btn btn-success" onClick={() => this.orderCart()}>Order</button>
      </div>
    )
  }
}
