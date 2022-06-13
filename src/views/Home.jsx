import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemListContainer from "../components/ItemListContainer";

const Home = () => {
  return (
    <Container className="vh-100 d-flex align-items-center">
      <Row>
        <Col xs={12}>
          <ItemListContainer />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
