import React, {Component} from 'react';
import WhoAmI from '../auth/components/WhoAmI'
import Login from '../auth/components/Login'
import { Link } from 'react-router'
import store from '../store'

export class LoginModal extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = { auth: this.props.auth}
  }

  onLogin() {
    this.setState({auth: this.props.auth})
  }

  render() {
    return (
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Modal title</h4>
            </div>
            <div className="modal-body">
              <div id="login-wrap"> {this.props.auth ? <WhoAmI user={this.props.auth}/> : <Login id="login" onClick={this.onLogin}/>} </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
