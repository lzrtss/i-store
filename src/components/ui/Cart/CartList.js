import React from 'react';
import PropTypes from 'prop-types';

import CartItem from './CartItem/CartItem';

const CartList = (props) => {
  return (
    <div className="container-fluid">
      {props.orderedProductsIds.map(id => (
        <CartItem 
          key={id} 
          id={id}
          products={props.products}
          orderedProducts={props.orderedProducts}
          addToCart={props.addToCart}
          substractFromCart={props.substractFromCart}
          removeItemFromCart={props.removeItemFromCart}
        />
      ))}
    </div>
  );
};

CartList.propTypes = { 
  products: PropTypes.arrayOf(PropTypes.object),
  orderedProducts: PropTypes.object,
  orderedProductsIds: PropTypes.arrayOf(PropTypes.string),
  addToCart: PropTypes.func,
  substractFromCart: PropTypes.func,
  removeItemFromCart: PropTypes.func
};

export default CartList;
