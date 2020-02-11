import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import Product from '../components/ui/Product/Product';
import AppSpinner from '../components/ui/AppSpinner';
import { 
  initFetchingProducts, 
  setProducts, 
  setOrderedProducts, 
  setLoadingProducts, 
  addToCart,
  hideFilters
} from '../store/products/actions';
import { 
  selectOrderedProducts, 
  selectAllProducts, 
  selectLoadingProducts, 
  getFilteredProducts,
  selectOrderedProductsIds
} from '../store/selectors';

const ProductList = (props) => {

  useEffect(() => {
    if (!props.products.length) {
      props.initFetchingProducts();
    }
    }, [props]
  );

  if (props.loadingProducts) return <AppSpinner />;

  return (
    <Container>
      <h3 className="mt-4">Our Products</h3>
      <Row className="d-flex justify-content-center">
        {props.filteredProducts.map(({ id, name, price, origin }) => (
          <Product
            key={id}
            id={id}
            name={name}
            price={price}
            origin={origin}
            orderedProductsIds={props.orderedProductsIds}
            addToCart={props.addToCart}
            hideFilters={props.hideFilters}
          />
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    products: selectAllProducts(state),
    orderedProducts: selectOrderedProducts(state),
    loadingProducts: selectLoadingProducts(state),
    filteredProducts: getFilteredProducts(state),
    orderedProductsIds: selectOrderedProductsIds(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initFetchingProducts: () => dispatch(initFetchingProducts()),
    setProducts: (products) => dispatch(setProducts(products)),
    setOrderedProducts: (orderedProducts) => dispatch(setOrderedProducts(orderedProducts)),
    setLoadingProducts: (value) => dispatch(setLoadingProducts(value)),
    addToCart: (id) => dispatch(addToCart(id)),
    hideFilters: () => dispatch(hideFilters()) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
