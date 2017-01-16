import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';
import store from '../store'

export default class NewReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      content: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    //removed event.preventdefault to have page refresh with the new review once you submit it
    // EI: make this an action creator, hook the form into the store, update the reviews in the store, etc...
    axios.post('/api/reviews', {
      rating: this.state.rating,
      content: this.state.content,
      book_id: this.props.book.id })

  }

  render() {
          return (
         <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Add a New Review</legend>
              <div className="form-group">
                <label className="col-xs-2 control-label">Rating</label>
                <div className="col-xs-10">
                {/* EI: this would be nice as a handleChange method */}
                 <input
                  type="number"
                  name="quantity"
                  min="1"
                  max="5"
                  onChange={e => this.setState({ rating: e.target.value })}/>>
                }
                </div>
              </div>

              <div className="form-group">
                <label className="col-xs-2 control-label">Content</label>
                <div className="col-xs-10">
                  <input className="form-control" type="text" onChange={e => this.setState({ content: e.target.value })}/>
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
