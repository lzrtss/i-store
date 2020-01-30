import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge, Nav } from 'react-bootstrap';

import { ProductsContext } from '../../providers/ProductsProvider';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const { getTotalAmount } = useContext(ProductsContext);
  const totalAmount = getTotalAmount();

  const badge = totalAmount ? 
    <Badge pill variant="danger" className="cartBadge ml-1">${totalAmount}</Badge> : null

  return (
    <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-primary">
      <Link to="/products">
        <img src={logo} alt="Logo" className="navbar-brand"/>
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
        <Link to="/products">
          <Button variant="outline-light"> 
            Products
          </Button>
        </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <Button variant="outline-light"><i className="fas fa-cart-plus mr-2" /> 
          My Cart 
          {badge}
        </Button>
      </Link>
    </Nav>
  );
};

export default Navbar;
