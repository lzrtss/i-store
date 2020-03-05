import React from 'react';
import { FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Select = (props) => {
  return (
    <>
      <div>
        <FormControl as="select"
          className="mt-3"
          disabled={props.submitting}
          {...props.input}
        >
          {props.children}
        </FormControl>
      </div>
      <div className="text-danger">
          {props.meta.touched && ((props.meta.error && <span>{props.meta.error}</span>))}
      </div>
    </>
  );
};

Select.propTypes = {
  disabled: PropTypes.bool
}

export default Select;
