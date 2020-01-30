import React, { } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CartColumns = () => {
  return (
    <Container className="container-fluid d-none d-lg-block">
      <Row>
        <Col md={2} xs={10} className="mx-auto">
          <p>PRODUCTS</p>
        </Col>
        <Col md={2} xs={10} className="mx-auto">
          <p>NAME</p>
        </Col>
        <Col md={2} xs={10} className="mx-auto">
          <p>PRICE</p>
        </Col>
        <Col md={2} xs={10} className="mx-auto">
          <p>QUANTITY</p>
        </Col>
        <Col md={2} xs={10} className="mx-auto">
          <p>REMOVE</p>
        </Col>
        <Col md={2} xs={10} className="mx-auto">
          <p>TOTAL</p>
        </Col>
      </Row>
    </Container>
  );
}

export default CartColumns;
