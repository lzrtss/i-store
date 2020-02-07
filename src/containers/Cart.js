import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

import AppSpinner from '../components/ui/AppSpinner';
import CartColumns from '../components/ui/Cart/CartColumns';
import CartList from '../components/ui/Cart/CartList';
import CartTotal from '../components/ui/Cart/CartTotal';
import { addToCart, substractFromCart, removeItemFromCart } from '../store/products/actions';
import { 
  selectLoadingProducts, 
  selectAllProducts, 
  selectOrderedProducts, 
  selectOrderedProductsIds,
  getTotalAmount
} from '../store/selectors';

const Cart = (props) => {

  if (props.loadingProducts) return <AppSpinner />;

  const title = props.orderedProductsIds.length ? 'Your Cart' : 'Your Cart is empty';
  const cartBody = props.orderedProductsIds.length ? (
    <>
      <CartColumns />
      <CartList
        products={props.products}
        orderedProducts={props.orderedProducts}
        orderedProductsIds={props.orderedProductsIds} 
        addToCart={props.addToCart}
        substractFromCart={props.substractFromCart}
        removeItemFromCart={props.removeItemFromCart}
        />
      <CartTotal totalAmount={props.totalAmount}/>
    </>
  ) : null;

  return (
    <Container className="mt-5" >
      <h3 className="mb-4">{title}</h3>
      {cartBody}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    loadingProducts: selectLoadingProducts(state),
    products: selectAllProducts(state),
    orderedProducts: selectOrderedProducts(state),
    orderedProductsIds: selectOrderedProductsIds(state),
    totalAmount: getTotalAmount(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    substractFromCart: (id) => dispatch(substractFromCart(id)),
    removeItemFromCart: (id) => dispatch(removeItemFromCart(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
