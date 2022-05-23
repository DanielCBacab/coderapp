import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalStateContext";

const Cart = ({ name, price, cant, id }) => {
  const { removeOfCart } = useContext(GlobalContext);

  return (
    <div>
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <p>Cantidad: {cant}</p>
      <button
        clasName="btn btn-danger"
        onClick={() => {
          removeOfCart(id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
};

export default Cart;
