
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import ProductItem from '../components/ProductItem';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage } from './../Actions/index'

class ProductsContainer extends Component {
  render() {
    var { products } = this.props;
    return (
      <Products>
        {this.showProducts(products)}
      </Products>
    );
  }
  showProducts(products) {
    var result = null;
    var { onAddToCart, onChangeMessage } = this.props;
    if (products.length) {
      result = products.map((product, index) => {
        return <ProductItem key={index} productItem={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
      });
    }
    return result;
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      stock: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (productItem) => {
      dispatch(actAddToCart(productItem, 1));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
