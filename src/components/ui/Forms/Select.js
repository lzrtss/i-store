import React from 'react';
import { FormControl } from 'react-bootstrap';

const Select = (props) => {
  return (
    <div>
      <FormControl as="select"
        className="mb-3"
        {...props.input}
      >
        {props.children}
      </FormControl>
    </div>
  );
};

export default Select;
