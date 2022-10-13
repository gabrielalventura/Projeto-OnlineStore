import { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import { BsBoxSeam } from 'react-icons/bs';

class ProductCard extends Component {
  render() {
    const { productName, productImage, productPrice, productId, shipping } = this.props;
    const { addCartAndLocalStorage } = this.props;
    return (
      <div data-testid="product">
        <h3>{productName}</h3>
        <img src={ productImage } alt={ productName } />
        {shipping && (
          <div data-testid="free-shipping">
            <BsBoxSeam />
            Frete Grátis
          </div>
        )}
        <span>{productPrice}</span>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ addCartAndLocalStorage }
          value={ productId }
        >
          Adicionar ao carrinho
        </button>
        <Link
          data-testid="product-detail-link"
          to={ `/item/${productId}` }
        >
          Mais detalhes

        </Link>
      </div>
    );
  }
}
ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  productId: PropTypes.string.isRequired,
  addCartAndLocalStorage: PropTypes.func.isRequired,
  shipping: PropTypes.bool.isRequired,
};
export default ProductCard;
