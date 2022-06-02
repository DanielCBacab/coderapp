import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { GlobalProvider } from "../context/GlobalStateContext";
import CartItem from "../components/CartItem";
import Form from "../components/Form";
import { dameTotat } from "../helpers/index";

const Checkout = () => {
  const { cart, clearCart, totalShop } = GlobalProvider();

  return (
    <Container>
      {cart.length > 0 ? (
        <Row className="justify-content-center my-5">
          <Col>
            <Form total={dameTotat(cart)} buyed={cart} />
          </Col>
          <Col>
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
          </Col>
        </Row>
      ) : (
        <>Carrito vacío</>
      )}
    </Container>
  );
};

export default Checkout;
