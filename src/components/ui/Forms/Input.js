import React from 'react';
import { FormControl } from 'react-bootstrap';

const Input = (props) => {
  return (
    <div>
      <FormControl
        placeholder={props.placeholder}
        aria-label={props.placeholder}
        className="mb-3"
        {...props.input}
      />
    </div>
  );
};

export default Input;
