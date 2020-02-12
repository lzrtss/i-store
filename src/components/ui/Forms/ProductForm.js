import React from 'react';
import { reduxForm, Field } from 'redux-form';

import Input from './Input';
import Select from './Select';

let ProductForm = (props) => {

  console.log(props);
  
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <Field name="name" component={Input} label="Name" type="text" placeholder="Product Name" />
        <Field name="price" component={Input} label="Price" type="text" placeholder="Product Price" />
        <Field  name="origin" component={Select}>
          <option>Pick Origin</option>
          <option value="usa">USA</option>
          <option value="europe">Europe</option>
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
        </Field >
        <div>
          <button className='btn btn-primary' disabled={props.submiting}>Add Product</button>
        </div>
      </form>
    </>
  );
};

ProductForm = reduxForm({
  form: 'product'
})(ProductForm);

export default ProductForm;
