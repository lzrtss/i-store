import React from 'react';

import './Filters.css';

const Filters = (props) => {

  const classes = props.showFiltersValue ? "Filters" : "Filters d-none";

  return (
    <div className={classes}>
      <div className="container d-flex flex-wrap justify-content-around align-items-center form-inline py-3">
        <div className="filterByPrice form-group">
          <input type="number" name="minPrice" placeholder="Min Price" className="form-control" onChange={(e) => props.setMinPrice(e.target.value)} />
          <input type="number" name="maxPrice" placeholder="Max Price" className="form-control ml-2" onChange={(e) => props.setMaxPrice(e.target.value)}/>
        </div>
        <div className="filterByOrigin form-group form-check form-check-inline">
          <input type="checkbox" name="europe" id="europe" value="europe" className="form-check-input" defaultChecked onChange={(e) => props.setOrigin(e.target.value)} /> 
          <label className="form-check-label" htmlFor="europe">Europe</label>
          <input type="checkbox" name="usa" id="usa" value="usa" className="form-check-input ml-3" defaultChecked onChange={(e) => props.setOrigin(e.target.value)} />
          <label className="form-check-label" htmlFor="usa">USA</label>
          <input type="checkbox" name="africa" id="africa" value="africa" className="form-check-input ml-3" defaultChecked onChange={(e) => props.setOrigin(e.target.value)} />
          <label className="form-check-label" htmlFor="africa">Africa</label>
          <input type="checkbox" name="asia" id="asia" value="asia" className="form-check-input ml-3" defaultChecked onChange={(e) => props.setOrigin(e.target.value)} />
          <label className="form-check-label" htmlFor="asia">Asia</label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
