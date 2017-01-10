import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookList extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {

  }

  render() {
    return (
      <div>
      <h1>BOOK NAMES</h1>
        <Books />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

/********************CONSTANTS*****************************8*****/


/********************ACTIONS*****************************8*****/


/********************ACTION CREATORS*****************************8*****/


// export default connect(null, { })(BookList);
