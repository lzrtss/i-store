import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectShowModalValue } from '../store/selectors';
import { hideModal } from '../store/products/actions';
import ModalWrapper from '../components/ui/Modal/ModalWrapper';
import ProductForm from '../components/ui/Forms/ProductForm';

const AddProductModal = (props) => {

  const handleSubmit = (formData) => {
    console.log('New Product: ', formData); // rewrite to dispatch action
  };

  const modalTitle = 'New Product';
  const modalBody = <ProductForm onSubmit={handleSubmit} />;

  return (
    <ModalWrapper
      show={props.showModal} 
      title={modalTitle}
      body={modalBody}
      onHide={props.hideModal}
    />
  )
};

const mapStateToProps = (state) => {
  return {
    showModal: selectShowModalValue(state)
  }
 };

 const mapDispatchToProps = (dispatch) => {
   return {
     hideModal: () => dispatch(hideModal())
   }
 };

AddProductModal.propTypes = {
  showModal: PropTypes.bool,
  hideModal: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProductModal);
