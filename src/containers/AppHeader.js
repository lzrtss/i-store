import React from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/ui/Navbar';
import Filters from '../components/ui/Filters/Filters';
import { getTotalAmount, getShowFiltersValue } from '../store/selectors';
import { setMinPrice, setMaxPrice, setOrigin, toggleFilters } from '../store/products/actions';

const AppHeader = (props) => {

  return (
    <div className="sticky-top">
      <Navbar 
        totalAmount={props.totalAmount}
        showFiltersValue={props.showFiltersValue} 
        toggleFilters={props.toggleFilters}
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
    toggleFilters: () => dispatch(toggleFilters())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
