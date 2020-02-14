import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Product from '../components/ui/Product/Product';
import AppSpinner from '../components/ui/AppSpinner';
import AddProductModal from './AddProductModal';
import { 
  initFetchingProducts, 
  setProducts, 
  setOrderedProducts, 
  setLoadingProducts, 
  addToCart,
  editProduct,
  hideFilters
} from '../store/products/actions';
import { 
  selectOrderedProducts, 
  selectAllProducts, 
  selectLoadingProducts, 
  getFilteredProducts,
  selectMyProducts,
  getShowMyProductsValue
} from '../store/selectors';

const ProductList = (props) => {

  useEffect(() => {
    if (!props.products.length) {
      props.initFetchingProducts();
    }
    }, [props]
  );

  let header, btnLabel, clickHandler;

  if (props.showMyProductsValue) {
    [header, btnLabel, clickHandler] = ['My Products', 'Edit Product', props.editProduct];
  } else {
    [header, btnLabel, clickHandler] = ['All Products', 'Add To Cart', props.addToCart];
  }

  if (props.loadingProducts) return <AppSpinner />;

  return (
    <Container>
      <h3 className="mt-4">{header}</h3>
      <Row className="d-flex justify-content-center">
        {props.filteredProducts.map(({ id, name, price, origin }) => (
          <Product
            key={id}
            id={id}
            name={name}
            price={price}
            origin={origin}
            btnLabel={btnLabel}
            clickHandler={clickHandler}
            hideFilters={props.hideFilters}
          />
        ))}
      </Row>
      <AddProductModal />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    products: selectAllProducts(state),
    orderedProducts: selectOrderedProducts(state),
    loadingProducts: selectLoadingProducts(state),
    filteredProducts: getFilteredProducts(state),
    myProds: selectMyProducts(state),
    showMyProductsValue: getShowMyProductsValue(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initFetchingProducts: () => dispatch(initFetchingProducts()),
    setProducts: (products) => dispatch(setProducts(products)),
    setOrderedProducts: (orderedProducts) => dispatch(setOrderedProducts(orderedProducts)),
    setLoadingProducts: (value) => dispatch(setLoadingProducts(value)),
    addToCart: (id) => dispatch(addToCart(id)),
    hideFilters: () => dispatch(hideFilters()),
    editProduct: (id) => dispatch(editProduct(id))
  };
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  orderedProducts: PropTypes.object,
  loadingProducts: PropTypes.bool,
  filteredProducts: PropTypes.arrayOf(PropTypes.object),
  myProds: PropTypes.arrayOf(PropTypes.object),
  showMyProductsValue: PropTypes.bool,
  initFetchingProducts: PropTypes.func,
  setProducts: PropTypes.func,
  setOrderedProducts: PropTypes.func,
  setLoadingProducts: PropTypes.func,
  addToCart: PropTypes.func,
  hideFilters: PropTypes.func,
  editProduct: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
