import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';

import { ProductsContext } from '../providers/ProductsProvider';
import Product from '../components/ui/Product/Product';
import AppSpinner from '../components/ui/AppSpinner';

const ProductList = () => {  
  const { loadingProducts, products } = useContext(ProductsContext);

  if (loadingProducts) return <AppSpinner />;

  return (
    <Container>
      <h3 className="mt-4">Our Products</h3>
      <Row className="d-flex justify-content-center">
        {products.map(({ id, name, price, origin, inCart, quantity, totalPrice }) => (
          <Product
            key={id}
            id={id}
            name={name}
            price={price}
            origin={origin}
            inCart={inCart}
            quantity={quantity}
            totalPrice={totalPrice}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
