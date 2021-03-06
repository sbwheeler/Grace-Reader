import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SingleBookReview from './singleBookReview';
import StarRatingComponent from 'react-star-rating-component';
import NewReviewContainer from '../review/newReviewFormContainer';
import { addToCart } from '../order/order-actions';
import store from '../store'
import { setGenre } from './book-actions'

class SingleBookComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { addedToCart: false }
    this.handleClick = this.handleClick.bind(this)
    this.changeGenre = this.changeGenre.bind(this)
  }

  handleClick() {
    store.dispatch(addToCart(this.props.currentBook.id))
    this.setState({addedToCart: true})
  }

  changeGenre({ genre }) {
    event.preventDefault();
    store.dispatch(setGenre(genre))
  }

  render() {
    const currentBook = this.props.currentBook
    return (
      <div className="currentBook container-fluid">
        <div className="row" >
          <div className='col-sm-5 col-centered'>
            {this.state.addedToCart && <h4>Added {currentBook.title} to your cart.</h4>}
            <div>
              <h3>{currentBook.title}</h3>
              <div>by {currentBook.author}</div>
              <br/>
              <div>Description : {currentBook.description}</div>
              <br/>
              <div>Price: $ {currentBook.price}</div>
              {
                currentBook.genre && currentBook.genre.map(genre => (
                  <div>
                  <Link to={`/books`} key={genre} onClick={()=>this.changeGenre({genre})}>{genre}</Link>
                  <br/>
                  </div>
                ))
              }
            <div>
            <br/>
              <button onClick={this.handleClick} className="cartbutton btn btn-default">Add to cart</button>
              <br/>
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
        </div>
      </div>
    )
  }
}

export default SingleBookComponent;
