import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

import ItemDetail from "../components/ItemDetail";
import db from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState();
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const myProduct = doc(db, "products", itemId);
    getDoc(myProduct)
      .then((prod) => {
        setItem({ id: prod.id, ...prod.data() });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <Container fluid className="vh-100 d-flex align-items-center">
      <Row className="justify-content-center align-items-center">
        {loading ? (
          <Col>
            <Spinner animation="border" role="status" variant="primary" />
          </Col>
        ) : (
          <ItemDetail {...item} />
        )}
      </Row>
    </Container>
  );
};

export default ItemDetailContainer;
