import React, { createContext, useState } from "react";

export const GlobalContext = createContext("");

export const globalContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(0);

  const AddToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <GlobalContext.Provider value={{ cart, AddToCart }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStateContext;
