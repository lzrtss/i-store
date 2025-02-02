import React from 'react';
import { Link } from 'react-router-dom'; 
import { Button, Badge, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';

import logo from '../../assets/images/logo.png';

const Navbar = (props) => {
  
  const badge = props.totalAmount ? 
    <Badge pill variant="danger" className="cartBadge ml-1">${props.totalAmount}</Badge> : null

  const filterBtnLabel = props.showFiltersValue ? 'Hide Filters' : 'Show Filters';
  const classes = props.showFiltersBtn ? null : 'd-none';

  return (
    <>
      <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-primary">
        <div className="container">
          <Link to="/products">
            <img src={logo} alt="Logo" className="navbar-brand"/>
          </Link>
          <ul className="navbar-nav d-flex w-100 justify-content-end align-items-center">
            <li className="nav-item ml-3 my-1">
              <Link to="/products" onClick={() => props.setShowMyProducts(false)}>
                <Button variant="outline-light"> 
                  Products
                </Button>
              </Link>
            </li>
            <li className="nav-item ml-3 my-1">
              <Button variant="outline-light" onClick={props.showModal}> 
                Add Product
              </Button>
            </li>
            <li className="nav-item ml-3 my-1">
              <Link to="/my-products" onClick={() => props.setShowMyProducts(true)}>
                <Button variant="outline-light"> 
                  My Products
                </Button>
              </Link>
            </li>
            <li className="nav-item ml-3 my-1">
              <Button variant="outline-light" className={classes} onClick={props.toggleFilters}> 
                {filterBtnLabel}
              </Button>
            </li>
            <li className="nav-item ml-3 my-1">
              <Link to="/cart" onClick={props.hideFilters} >
                <Button variant="outline-light"><i className="fas fa-cart-plus mr-2" /> 
                  My Cart 
                  {badge}
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </Nav>
    </>
  );
};

Navbar.propTypes = {
  totalAmount: PropTypes.number,
  showFiltersValue: PropTypes.bool,
  showFiltersBtn: PropTypes.bool,
  setShowMyProducts: PropTypes.func,
  toggleFilters: PropTypes.func,
  hideFilters: PropTypes.func,
  showModal: PropTypes.func
}

export default Navbar;
