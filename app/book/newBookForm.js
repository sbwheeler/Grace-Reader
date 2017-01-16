import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';
import store from '../store'

export default class NewBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      price: 0,
      description: '',
      stockCount: 0,
      imageUrl: '',
      genre: ['']
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    // EI: make async action creator?
    axios.post('/api/books', { title: this.state.title, author: this.state.author, genre: this.state.genre, price: this.state.price, description: this.state.description, stockCount: this.state.stockCount, imageUrl: this.state.imageUrl })
    .then(createdBook => {
      browserHistory.push(`/books/${createdBook.data.id}`)
    })

  }

  render() {
          return (
         <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Add a New Book</legend>

              <div className="form-group">
                <label className="col-xs-2 control-label">Title</label>
                <div className="col-xs-10">
                  <input className="form-control" type="text" onChange={e => this.setState({ title: e.target.value })}/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-xs-2 control-label">Author</label>
                <div className="col-xs-10">
                  <input className="form-control" type="text" onChange={e => this.setState({ author: e.target.value })}/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-xs-2 control-label">Description</label>
                <div className="col-xs-10">
                  <input className="form-control" type="text" onChange={e => this.setState({ description: e.target.value })}/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-xs-2 control-label">Image URL</label>
                <div className="col-xs-10">
                  <input className="form-control" type="text" onChange={e => this.setState({ imageUrl: e.target.value })}/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-xs-2 control-label">Price</label>
                <div className="col-xs-10">
                  <input className="form-control" type="number" onChange={e => this.setState({ price: e.target.value })}/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-xs-2 control-label">Stock Count</label>
                <div className="col-xs-10">
                  <input className="form-control" type="number" onChange={e => this.setState({ stockCount: e.target.value })}/>
                </div>
              </div>

              <div className="form-group">
                <div className="col-xs-10 col-xs-offset-2">
                  <button type="submit" className="btn btn-success">Add Review</button>
                </div>
              </div>

            </fieldset>
          </form>
          );
      }
}
