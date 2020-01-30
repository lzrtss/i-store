import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';

import { ProductsContext } from '../providers/ProductsProvider';
import AppSpinner from '../components/ui/AppSpinner';
import CartColumns from '../components/ui/Cart/CartColumns';
import CartList from '../components/ui/Cart/CartList';
import CartTotal from '../components/ui/Cart/CartTotal';

const CartRoute = () => {
  const { loadingProducts, orderedProducts, getTotalAmount } = useContext(ProductsContext);
  const curOrderedProducts = {...orderedProducts};
  const orderedProductsIds = Object.keys(curOrderedProducts).filter(key => curOrderedProducts[key] > 0);

  const totalAmount = getTotalAmount();

  if (loadingProducts) return <AppSpinner />;

  return (
    <Container className="mt-5" >
      <h3 className="mb-4">Your Cart</h3>
      <CartColumns />
      <CartList orderedProductsIds={orderedProductsIds} />
      <CartTotal totalAmount={totalAmount}/>
    </Container>
  );
}

export default CartRoute;
