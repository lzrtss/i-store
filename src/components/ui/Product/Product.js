import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Product.css';
import productImage from '../../../assets/images/product-image.png';

const Product = (props) => {

  return (
      <Card className="productCard">
        <Card.Img variant="top" src={productImage} />
        <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Price: ${props.price.toFixed(2)} <br />
          Origin: {props.origin.toUpperCase()} <br />
        </Card.Text>
        <Button 
          variant="outline-primary" 
          size="sm" 
          className="mr-2"  
          onClick={() => props.clickHandler(props.id)}>
          {props.btnLabel}
        </Button>
        <Link to={`/products/${props.id}`}>
          <Button 
            variant="outline-secondary" 
            size="sm"
            onClick={props.hideFilters}
          >
            Show Details
          </Button>
        </Link>
      </Card.Body>
      </Card>
  );
};

Product.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  origin: PropTypes.string,
  btnLabel: PropTypes.string,
  addToCart: PropTypes.func,
  hideFilters: PropTypes.func,
};

export default Product;
