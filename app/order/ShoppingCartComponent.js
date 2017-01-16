import React from 'react';
import { Link } from 'react-router';


const ShoppingCartComponent = ({ shoppingCart }) => {
    return (
      <div>
        <h1>YOUR SHOPPING CART</h1>
        <div className="row">
          {
            shoppingCart && shoppingCart.map(book => (
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
          </div>
    </div>
  )

}

export default ShoppingCartComponent;
