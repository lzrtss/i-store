import React, { useContext } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { ProductsContext } from '../../../../providers/ProductsProvider';
import './CartItem.css';
import productImage from '../../../../assets/images/product-image.png';

const CartItem = ({ id }) => {
  const { 
    products, 
    orderedProducts, 
    addToCart, 
    substractFromCart, 
    removeItemFromCart 
  } = useContext(ProductsContext);

  const product = products.find(prod => prod.id === id);
  const {name, price} = product;
  const quantity = orderedProducts[id];
  const itemTotalPrice = price * quantity;

  return (
    <Row className="CartItem">
      <Col xs={10} lg={2} className="mx-auto">
        <img src={productImage} alt="Product" style={{ width: '5rem', height: '5rem' }} className="image-fluid"/>
      </Col>
      <Col xs={10} lg={2} className="mx-auto">
        <span className="d-lg-none">Product: </span>{name}
      </Col>
      <Col xs={10} lg={2} className="mx-auto">
        <span className="d-lg-none">Price: </span>${price.toFixed(2)}
      </Col>
      <Col xs={10} lg={2} className="mx-auto my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <Button variant="outline-dark" onClick={() => substractFromCart(id)}>-</Button>
            <span className="mx-3">{quantity}</span>
            <Button variant="outline-dark" onClick={() => addToCart(id)}>+</Button>
          </div>
        </div>
      </Col>
      <Col xs={10} lg={2} className="mx-auto">
        <i className="fas fa-trash removeItem mb-2 removeItem" onClick={() => removeItemFromCart(id)}></i>
      </Col>
      <Col xs={10} lg={2} className="mx-auto mb-3">
        <strong className="d-lg-none">Item Total: </strong>${itemTotalPrice.toFixed(2)}
      </Col>
    </Row>
  );
};

CartItem.propTypes = {
  id: PropTypes.string
};

export default CartItem;
