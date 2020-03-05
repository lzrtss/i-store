import React from 'react';
import { FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Input = (props) => {
  return (
    <>
      <div>
        <FormControl
          className="mt-3"
          placeholder={props.placeholder}
          aria-label={props.placeholder}
          disabled={props.disabled}
          {...props.input}
        />
      </div>
      <div className="text-danger">
          {props.meta.touched && ((props.meta.error && <span>{props.meta.error}</span>))}
      </div>
    </>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};

export default Input;
