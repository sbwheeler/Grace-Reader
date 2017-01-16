import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewReviewForm from './newReviewForm';
import { addNewReview } from './reviewActionCreator'


const mapDispatchToProps = (dispatch) => {
  return {
    addNewReview (review) {
      dispatch(addNewReview(review))
    }
  }
}

class NewReviewWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      content: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    const name = event.target.name;

    //this syntax allows us to pass a variable name into the object literal, this name will be the state property and is coming off the 'name' html properties in NewReviewForm
    this.setState({
      [name]: event.target.value
    })
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.addNewReview(Object.assign({}, this.state, { book_id: this.props.book.id }));

    this.setState({
      rating: 0,
      content: ''
    })
  }

  render() {
    return (
      <NewReviewForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        rating={this.state.rating}
        content={this.state.content}
          />
    )
  }
}

export default connect(null, mapDispatchToProps)(NewReviewWrapper)


//pass this into the book view so you can pass current book down to it
