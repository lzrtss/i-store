import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from '../components/ui/Navbar';
import Filters from '../components/ui/Filters/Filters';
import { getTotalAmount, getShowFiltersValue } from '../store/selectors';
import { 
  setMinPrice, 
  setMaxPrice, 
  setOrigin, 
  toggleFilters, 
  hideFilters,
  showModal 
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
    showFiltersValue: getShowFiltersValue(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMinPrice: (minPrice) => dispatch(setMinPrice(minPrice)),
    setMaxPrice: (maxPrice) => dispatch(setMaxPrice(maxPrice)),
    setOrigin: (origin) => dispatch(setOrigin(origin)),
    toggleFilters: () => dispatch(toggleFilters()),
    hideFilters: () => dispatch(hideFilters()),
    showModal: () => dispatch(showModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppHeader));
