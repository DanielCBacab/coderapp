import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { GlobalContext } from "../context/GlobalStateContext";

export default function CartWidget() {
  const { cart } = useContext(GlobalContext);

  return (
    <>
      <ShoppingCartIcon />
      <div>
        {" "}
        <ul>
          {cart.length > 0 ? (
            cart.map((item, index) => <li key={index}>{item.name}</li>)
          ) : (
            <h1>Carrito esta vacío </h1>
          )}
        </ul>
      </div>
    </>
  );
}
