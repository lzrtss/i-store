import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/ui/Navbar';
import ProductList from './containers/ProductList';
import ProductDetails from './components/ui/ProductDetails';
import Cart from './containers/Cart';
import ProductsProvider from './providers/ProductsProvider';
import './App.css';

const App = () => {
  return (
    <>
    <ProductsProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/products">
            <ProductList />
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
      </Router>
    </ProductsProvider>
    </>
  );
};

export default App;
