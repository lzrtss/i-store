import React from 'react';

import CartItem from './CartItem';

const CartList = ({ orderedProductsIds }) => {
  return (
    <div className="container-fluid">
      {orderedProductsIds.map(id => (
        <CartItem key={id} id={id} />
      ))}
    </div>
  );
};

export default CartList;
