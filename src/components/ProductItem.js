/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import * as Message from './../Constants/Message'

class ProductItem extends Component {
  render() {
    var { productItem } = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={productItem.image} className="img-fluid" alt={productItem.name} />
            <a>
              <div className="mask waves-light waves-effect waves-light" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a>{productItem.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              <li>
                {this.showRating(productItem.rating)}
              </li>
            </ul>
            <p className="card-text">
              {productItem.description}
            </p>
            <div className="card-footer">
              <span className="left">{productItem.price}</span>
              <span className="right">
                <a onClick={() => this.onAddToCart(productItem)} className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Cart">
                  <i className="fa fa-shopping-cart" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  onAddToCart = (product) => {
    this.props.onAddToCart(product);
    this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
  }
  showRating(rating) {
    var result = [];
    for (var i = 1; i <= rating; i++) {
      result.push(<i key={i} className="fa fa-star" />);
    }
    for (var j = 1; j <= (5 - rating); j++) {
      result.push(<i key={j + i} className="fa fa-star-o" />);
    }
    return result;
  }
}
export default ProductItem;
