import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import Product from '../components/ui/Product/Product';
import AppSpinner from '../components/ui/AppSpinner';
import { setProducts, setOrderedProducts, setLoadingProducts, addToCart } from '../store/products/actions';
import { selectOrderedProducts, selectLoadingProducts } from '../store/selectors';
import useGetProductList from '../hooks/useGetProductList';

const ProductList = (props) => {

  const { products } = useGetProductList();

  if (props.loadingProducts) return <AppSpinner />;

  return (
    <Container>
      <h3 className="mt-4">Our Products</h3>
      <Row className="d-flex justify-content-center">
        {products.map(({ id, name, price, origin }) => (
          <Product
            key={id}
            id={id}
            name={name}
            price={price}
            origin={origin}
            addToCart={props.addToCart}
          />
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    orderedProducts: selectOrderedProducts(state),
    loadingProducts: selectLoadingProducts(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: (products) => dispatch(setProducts(products)),
    setOrderedProducts: (orderedProducts) => dispatch(setOrderedProducts(orderedProducts)),
    setLoadingProducts: (value) => dispatch(setLoadingProducts(value)),
    addToCart: (id) => dispatch(addToCart(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
