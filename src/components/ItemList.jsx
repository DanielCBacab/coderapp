import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        {items.map((prod) => (
          <Col xs={12} md={4}>
            <Item key={prod.id} {...prod} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;
