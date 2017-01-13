import React, { Component } from 'react';

class ProductsList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const books = this.props.allBooks
    return (
    <div>
      <div>
        <h1>PRODUCTS LISTTT</h1>
        <div>{books.length}</div>
      </div>
    </div>
    )
  }
}

//NEED THE SHOPPING CART AND ORDERS B COMPONENT

// ProductsList.propTypes = {
//   children: PropTypes.node,
//   title: PropTypes.string.isRequired
// }

export default ProductsList
