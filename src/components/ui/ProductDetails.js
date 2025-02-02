import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import AppSpinner from './AppSpinner';
import useGetProductById from '../../hooks/useGetProductById';
import { selectOrderedProductsIds } from '../../store/selectors';
import { addToCart } from '../../store/products/actions';
import productImage from '../../assets/images/product-image.png';

const ProductDetails = (props) => {
  const { productId } = useParams();
  const { product } = useGetProductById(productId);
  const { id, name, price, origin } = product || {};
  
  if (!product) return <AppSpinner />;

  const btnLabel = props.orderedProductsIds.includes(id) ? 'Added To Cart' : 'Add To Cart';

  return (
    <Container>
      <Row className="text-left">
        <Col xs={10} md={6} className="mx-auto my-5">
          <img src={productImage} alt="Product" className="img-fluid" />
        </Col>
        <Col xs={10} md={6} className="mx-auto my-5">
          <h3>Product: {name}</h3>
          <p className="lead mt-3 mb-1">Price: ${price.toFixed(2)}</p>
          <p className="lead">Origin: {origin.toUpperCase()}</p>
            <Button 
              variant="outline-primary"
              onClick={() => props.addToCart(id)}>
              {btnLabel}
            </Button>
          <Link to="/products">
            <Button variant="outline-secondary ml-2">
                Back To Products
              </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

ProductDetails.propTypes = {
  orderedProductsIds: PropTypes.arrayOf(PropTypes.string),
  addToCart: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    orderedProductsIds: selectOrderedProductsIds(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
