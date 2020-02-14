import React from 'react';
import { connect, useSelector } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import Input from './Input';
import Select from './Select';
import { selectEditProductId } from '../../../store/selectors';
import { prodFormValidation } from './validation';

let ProductForm = (props) => { 

  const productId = useSelector(selectEditProductId);

  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <Field name="name" component={Input} label="Name" type="text" placeholder="Product Name" disabled={props.submitting} />
        <Field name="price" component={Input} label="Price" type="text" placeholder="Product Price" disabled={props.submitting}/>
        <Field  name="origin" component={Select} disabled={props.submitting}>
          <option value="">Pick Origin</option>
          <option value="usa">USA</option>
          <option value="europe">Europe</option>
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
        </Field >
        <div>
          <button type="submit" className="btn btn-primary mt-3" disabled={props.invalid || props.submitting || props.pristine}>Submit</button>
          {productId && <button type="button" className="btn btn-outline-secondary mt-3 ml-2" onClick={props.reset}>Reset</button>}
        </div>
      </form>
    </>
  );
};

ProductForm.propTypes = {
  handleSubmit: PropTypes.func
};

ProductForm = reduxForm({
  form: 'productForm',
  validate: prodFormValidation
})(ProductForm);

ProductForm = connect(
  state => ({
    initialValues: state.products.products.find(prod => prod.id === state.products.editProductId)
  })
)(ProductForm)

export default ProductForm;
