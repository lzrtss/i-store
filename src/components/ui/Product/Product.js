import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ProductsContext } from '../../../providers/ProductsProvider';
import styles from './Product.module.css';
import productImage from '../../../assets/images/product-image.png';

const Product = ({
  id,
  name,
  price,
  origin
}) => {
  const { addToCart } = useContext(ProductsContext);

  return (
      <Card style={{ width: '18rem', margin: '1rem' }} className={styles.productCard}>
        <Card.Img variant="top" src={productImage} />
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Price: ${price.toFixed(2)} <br />
          Origin: {origin.toUpperCase()} <br />
        </Card.Text>
        <Button 
          variant="outline-primary" 
          size="sm" 
          className="mr-2"  
          onClick={() => addToCart(id)}>
          Add To Cart
        </Button>
        <Link to={`/products/${id}`}>
          <Button 
            variant="outline-secondary" 
            size="sm">
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
  origin: PropTypes.string
};

export default Product;
