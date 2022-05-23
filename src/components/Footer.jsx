import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <Container fluid className="bg-light mt-5">
      <Row className="py-5">
        <Col xs={12}>DanielShop 2022 - Todos los derechos reservados</Col>
      </Row>
    </Container>
  );
};
export default Footer;
