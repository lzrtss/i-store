import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navbar from '../components/ui/Navbar';
import Filters from '../components/ui/Filters/Filters';
import { getTotalAmount, getShowFiltersValue, getShowMyProductsValue } from '../store/selectors';
import { 
  setMinPrice, 
  setMaxPrice, 
  setOrigin, 
  toggleFilters, 
  hideFilters,
  showModal,
  setShowMyProducts
} from '../store/products/actions';

const AppHeader = (props) => {

  const [ showFiltersBtn, setShowFiltersBtn ] = useState(true);
  const { location } = props;

  useEffect(() => {
    if (location.pathname === '/cart') {
      setShowFiltersBtn(false);
    } else {
      setShowFiltersBtn(true);
    }
  }, [location.pathname]);

  return (
    <div className="sticky-top">
      <Navbar 
        totalAmount={props.totalAmount}
        showFiltersBtn={showFiltersBtn}
        showFiltersValue={props.showFiltersValue} 
        toggleFilters={props.toggleFilters}
        hideFilters={props.hideFilters}
        showModal={props.showModal}
        setShowMyProducts={props.setShowMyProducts}
      />
      <Filters 
        setMinPrice={props.setMinPrice}
        setMaxPrice={props.setMaxPrice}
        setOrigin={props.setOrigin}
        showFiltersValue={props.showFiltersValue} 
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    totalAmount: getTotalAmount(state),
    showFiltersValue: getShowFiltersValue(state),
    showMyProductsValue: getShowMyProductsValue(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMinPrice: (minPrice) => dispatch(setMinPrice(minPrice)),
    setMaxPrice: (maxPrice) => dispatch(setMaxPrice(maxPrice)),
    setOrigin: (origin) => dispatch(setOrigin(origin)),
    toggleFilters: () => dispatch(toggleFilters()),
    hideFilters: () => dispatch(hideFilters()),
    showModal: () => dispatch(showModal()),
    setShowMyProducts: (value) => dispatch(setShowMyProducts(value))
  };
};

AppHeader.propTypes = {
  totalAmount: PropTypes.number,
  showFiltersValue: PropTypes.bool,
  showMyProductsValue: PropTypes.bool,
  setMinPrice: PropTypes.func,
  setMaxPrice: PropTypes.func,
  setOrigin: PropTypes.func,
  toggleFilters: PropTypes.func,
  hideFilters: PropTypes.func,
  showModal: PropTypes.func,
  setShowMyProducts: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppHeader));
