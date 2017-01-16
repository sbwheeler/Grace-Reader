import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SingleBookReview from './singleBookReview';
import StarRatingComponent from 'react-star-rating-component';
import NewReviewContainer from '../review/newReviewFormContainer';
import { addToCart } from '../order/order-actions';
import store from '../store'

class SingleBookComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { addedToCart: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    store.dispatch(addToCart(this.props.currentBook.id))
    this.setState({addedToCart: true})
  }

  render() {
    const currentBook = this.props.currentBook
    return (
      <div className="currentBook">
        {this.state.addedToCart && <h1>ADDED TO CART!!</h1>}
        <div>
          <h3>{currentBook.title}</h3>
          <div>by {currentBook.author}</div>
          <div>Description : {currentBook.description}</div>
          <div>Price: $ {currentBook.price}</div>
        <div>
          <button onClick={this.handleClick}>Add to cart</button>
          <StarRatingComponent
            name="rate1"
            editing={false}
            starCount={5}
            value={currentBook.reviews && currentBook.reviews.map(review => review.rating).reduce((a, b) => { return a + b;}, 0) / currentBook.reviews.length}
            renderStarIconHalf={() => <span className="fa fa-star-half-full" />}
          />
          </div>
          <img src={currentBook.imageUrl} className="img-thumbnail" height="300" width="200"/>
        </div>
        <h3>REVIEWS</h3>
        {
          currentBook.reviews && currentBook.reviews.map(review => (
            <div key={review.id}>
              <Link to={`/reviews/${review.id}`}>
                <SingleBookReview review={review} />
              </Link>
            </div>
          ))
        }
        <NewReviewContainer book={currentBook} />
      </div>
    )
  }
}

export default SingleBookComponent;
