import React from 'react';
import PropTypes from 'prop-types';

import CartItem from './CartItem/CartItem';

const CartList = ({ orderedProductsIds }) => {
  return (
    <div className="container-fluid">
      {orderedProductsIds.map(id => (
        <CartItem key={id} id={id} />
      ))}
    </div>
  );
};

CartList.propTypes = {
  orderedProductsIds: PropTypes.arrayOf(PropTypes.string)
};

export default CartList;
