import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router";
import ItemList from "../components/ItemList";
// Data request

import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../firebase/config";

const ItemListContainer = (props) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);

    const myCollection = collection(db, "products");

    const q = catId
      ? query(myCollection, where("category", "==", catId))
      : myCollection;
    getDocs(q)
      .then((datos) => {
        setProducts(datos.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [catId]);

  return (
    <Container>
      <Row className="my-5 text-center text-success">
        <h2>Lista de productos</h2>
      </Row>
      <Row>
        {loading ? (
          <Col xs={12}>Está cargando...</Col>
        ) : (
          <Col xs={12}>
            <ItemList items={products} />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default ItemListContainer;
