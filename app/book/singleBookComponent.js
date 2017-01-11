import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class SingleBookComponent extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const book = this.props.currentBook;

    return (
      <div>
        <h1>{book.title}</h1>
        <div>
          <div>
            {book.author}
          </div>
          <div>
            {book.price}
          </div>
        </div>
      </div>
    )
  }
}

export default SingleBookComponent;
