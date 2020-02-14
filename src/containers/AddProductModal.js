import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectShowModalValue, selectEditProductId } from '../store/selectors';
import { closeModal, addProduct, sendUpdatedProductData } from '../store/products/actions';
import ModalWrapper from '../components/ui/Modal/ModalWrapper';
import ProductForm from '../components/ui/Forms/ProductForm';

const AddProductModal = (props) => {

  const handleSubmit = (formData) => {
    const { name, price, origin } = formData;
    const newProduct = {
      product: {
        name: name, 
        price: Number(price), 
        origin: origin
      }
  };
    if (props.editProductId) {
      props.sendUpdatedProductData(props.editProductId, newProduct);
    } else {
      props.addProduct(newProduct);
    }
  };

  const modalTitle = props.editProductId ? 'Edit Product' : 'New Product';
  const modalBody = <ProductForm onSubmit={handleSubmit} />;

  return (
    <ModalWrapper
      show={props.showModal} 
      title={modalTitle}
      body={modalBody}
      onHide={props.closeModal}
    />
  )
};

const mapStateToProps = (state) => {
  return {
    showModal: selectShowModalValue(state),
    editProductId: selectEditProductId(state)
  }
 };

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    addProduct: (productData) => dispatch(addProduct(productData)),
    sendUpdatedProductData: (id, data) => dispatch(sendUpdatedProductData(id, data))
   }
 };

AddProductModal.propTypes = {
  showModal: PropTypes.bool,
  editProductId: PropTypes.string,
  closeModal: PropTypes.func,
  addProduct: PropTypes.func,
  sendUpdatedProductData: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProductModal);
