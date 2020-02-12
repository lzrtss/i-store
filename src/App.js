import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppHeader from './containers/AppHeader';
import ProductList from './containers/ProductList';
import MyProducts from './containers/MyProducts';
import ModalWindow from './containers/AddProductModal'; // remove
import ProductDetails from './components/ui/ProductDetails';
import Cart from './containers/Cart';
import './App.css';

const App = () => {
  return (
    <>
      <AppHeader />
      <Switch>
        <Route exact path="/products">
          <ProductList />
        </Route>
        <Route exact path="/add-product">
            {/* <AddProductModal /> */}
            <ModalWindow />
        </Route>
        <Route exact path="/my-products">
            <MyProducts />
        </Route>
        <Route exact path="/cart">
            <Cart />
        </Route>
        <Route exact path="/products/:productId">
          <ProductDetails />
        </Route>
        <Route path="*">
          <Redirect to="/products" />
        </Route>
      </Switch>
    </>
  );
};

export default App;
