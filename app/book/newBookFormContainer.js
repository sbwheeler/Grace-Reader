import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewBookForm from './newBookForm'
import { addNewBook } from './book-actions'


const mapDispatchToProps = (dispatch) => {
  return {
    addNewBook (book) {
      dispatch(addNewBook(book))
    }
  }
}

class NewBookWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      price: 0,
      description: '',
      stockCount: 0,
      imageUrl: '',
      genre: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit(event) {
    console.log('IN HANDLE SUBMIT')
    event.preventDefault();
    this.props.addNewBook(this.state);

    this.setState({
      title: '',
      author: '',
      price: 0,
      description: '',
      stockCount: 0,
      imageUrl: '',
      genre: ['']
    })
  }

  render() {
    return (
      <NewBookForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        title={this.state.title}
        author={this.state.author}
        price={this.state.price}
        description={this.state.description}
        stockCount={this.state.stockCount}
        imageUrl={this.state.imageUrl}
        genre={this.state.genre}
          />
    )
  }
}

export default connect(null, mapDispatchToProps)(NewBookWrapper)


//pass this into the book view so you can pass current book down to it
