import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ButtonCart.css';

class ButtonCart extends Component {
  render() {
    const { cartCount } = this.props;
    return (
      <div className="cart">
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          <img
            src="https://cdn-icons-png.flaticon.com/512/34/34627.png"
            alt="Cart icon."
          />
          <div className="counter">{cartCount}</div>
        </Link>
      </div>
    );
  }
}

ButtonCart.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default ButtonCart;
