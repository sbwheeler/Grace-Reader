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
          <h2>Your Cart</h2>
            {
              this.props.shoppingCart && this.props.shoppingCart.map(book => (
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 list-item" key={ book.id }>
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
            { this.props.shoppingCart.length ? <button type="submit" className="btn btn-default" onClick={() => this.orderCart()}>Order</button> : <div><p>Add something to your cart!</p></div>
            }
      </div>
    )
  }
}
