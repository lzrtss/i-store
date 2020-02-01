import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { ProductsContext } from '../../providers/ProductsProvider';
import productImage from '../../assets/images/product-image.png';

const Product = ({
  id,
  name,
  price,
  origin
}) => {
  const { addToCart } = useContext(ProductsContext);

  return (
      <Card style={{ width: '18rem', margin: '1rem' }} className="productCard">
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

export default Product;
