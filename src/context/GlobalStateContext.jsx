import React, { createContext, useState } from "react";

export const GlobalContext = createContext("");

export const GlobalProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const AddToCart = (product) => {
    setCart([...cart, product]);
  };
  const clear = () => setCart([]);

  return (
    <GlobalContext.Provider value={{ cart, AddToCart }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
