import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store.jsx';
import ProductsList from '../components/ProductsList';

// import { addToCart } from '../actions'
// import { getVisibleProducts } from '../reducers/products'
// import ProductItem from '../components/ProductItem'
// import ProductsList from '../components/ProductsList'

// const ProductsContainer = ({ products, addToCart }) => (
//   <ProductsList title="Products">
//     {products.map(product =>
//       <ProductItem
//         key={product.id}
//         product={product}
//         onAddToCartClicked={() => addToCart(product.id)} />
//     )}
//   </ProductsList>
// )

// ProductsContainer.propTypes = {
//   products: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     inventory: PropTypes.number.isRequired
//   })).isRequired,
//   addToCart: PropTypes.func.isRequired
// }

// const mapStateToProps = state => ({
//   products: getVisibleProducts(state.products)
// })

function mapStateToProps(state) {
  return {
    allBooks: state.books.allBooks
  }
}


export default connect(mapStateToProps)(ProductsList);
