import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CartTotal = ({ totalAmount }) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={10} sm={8} className="mt-2 ml-sm-5 ml-md-auto text-right">
            <h5>Total: ${totalAmount.toFixed(2)}</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
};

CartTotal.propTypes = {
  totalAmount: PropTypes.number
};

export default CartTotal;
