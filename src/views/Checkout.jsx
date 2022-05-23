import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalStateContext";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Checkout = () => {
  const { cart, clearCart, totalShop } = useContext(GlobalContext);

  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col>
          {cart.length > 0 ? (
            <>
              <h2>Productos en el carrito</h2>
              <div>
                {cart.map((prod) => (
                  <CartItem key={prod.id} {...prod} />
                ))}
              </div>
              <hr />
              <div className="d-flex justify-content-end mb-5">
                <h4>Total: ${totalShop()}</h4>
              </div>
              <div>
                {" "}
                <Button className="btn btn-danger" onClick={clearCart}>
                  Vaciar carrito
                </Button>
                <Button className="btn btn-success">Terminar mi compra</Button>
              </div>
            </>
          ) : (
            <>Carrito vacío</>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
