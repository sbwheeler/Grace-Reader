import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewUserComponent from './newUserComponent';
import { signUp } from '../reducers/auth'
import store from '../../store'


const mapDispatchToProps = (dispatch) => {
  return {
    signUp (user) {
      dispatch(signUp(user))
    }
  }
}

class NewUserWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
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
    this.props.signUp(this.state);

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <NewUserComponent
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        password={this.state.password}
          />
    )
  }
}

export default connect(null, mapDispatchToProps)(NewUserWrapper)


//pass this into the book view so you can pass current book down to it
