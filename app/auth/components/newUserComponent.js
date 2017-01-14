import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {login, signUp } from '../reducers/auth'
import axios from 'axios';
import store from '../../store'

export default class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(signUp(this.state));
  }

  render() {
          return (
         <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>New User</legend>
              <div className="form-group">
                <label className="col-xs-2 control-label">First Name</label>
                <div className="col-xs-10">
                  <input className="form-control" type="text" onChange={e => this.setState({ firstName: e.target.value })}/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-xs-2 control-label">Last Name</label>
                <div className="col-xs-10">
                  <input className="form-control" type="text" onChange={e => this.setState({ lastName: e.target.value })}/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-xs-2 control-label">Email</label>
                <div className="col-xs-10">
                  <input className="form-control" type="text" onChange={e => this.setState({ email: e.target.value })}/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-xs-2 control-label">Password</label>
                <div className="col-xs-10">
                  <input className="form-control" type="text" onChange={e => this.setState({ password: e.target.value })}/>
                </div>
              </div>

              <div className="form-group">
                <div className="col-xs-10 col-xs-offset-2">
                  <button type="submit" className="btn btn-success">Add User</button>
                </div>
              </div>

            </fieldset>
          </form>
          );
      }
}
