import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalWrapper = (props) => {

  if (props.show === false) return null;

  return (
    <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.body}
        </Modal.Body>
      </Modal>
  )
};

export default ModalWrapper;
