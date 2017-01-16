import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';
import store from '../store'

export default function ({ handleChange, handleSubmit, rating, content }){
          return (
         <form className="form-horizontal" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Add a New Review</legend>
              <div className="form-group">
                <label className="col-xs-2 control-label">Rating</label>
                <div className="col-xs-10">
                 <input type="number" name="rating" min="1" max="5" onChange={handleChange} value={rating}/>>
                </div>
              </div>

              <div className="form-group">
                <label className="col-xs-2 control-label">Content</label>
                <div className="col-xs-10">
                  <input className="form-control" name="content" type="text" onChange={handleChange} value={content}/>
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
