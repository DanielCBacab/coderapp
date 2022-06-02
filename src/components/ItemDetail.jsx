import React, { useState, useContext } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { GlobalProvider } from "../context/GlobalStateContext";
import ItemCount from "../components/ItemCount";
const ItemDetail = (props) => {
  const { id, name, price, stock, description, img, category } = props;
  const context = GlobalProvider();
  const { addToCart, isInCart } = GlobalProvider();
  const [cant, setCant] = useState(0);

  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (cant > 0) {
      addToCart({ id, name, price, img, cant });
    }
  };

  return (
    <>
      <Col xs={4}>
        <Image src={img} fluid />
      </Col>
      <Col xs={8}>
        <small>
          <span className="badge bg-secondary">{category}</span>
        </small>
        <h3>{name}</h3>
        <h4>$ {price}</h4>
        <h4>Disponibles: {stock}</h4>
        <h6>SKU: {id}</h6>
        <p>Descripción: {description}</p>

        {!isInCart(id) ? (
          <ItemCount
            max={stock}
            cant={cant}
            setCant={setCant}
            onAdd={handleAddToCart}
          />
        ) : (
          <Link to="/checkout" className="btn btn-success">
            Ir al carrito
          </Link>
        )}
      </Col>
    </>
  );
};
export default ItemDetail;
