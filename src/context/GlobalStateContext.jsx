import React, { createContext, useState } from "react";

// nombre del context que estan creando
export const GlobalContext = createContext("");

const GlobalProvider = ({ children }) => {
  // este componente sera el responsable de proveer info y almacenar info
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const removeOfCart = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalShop = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.cant, 0);
  };

  const totalCant = () => {
    return cart.reduce((acc, prod) => acc + prod.cant, 0);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  return (
    <GlobalContext.Provider
      value={{
        cart,
        addToCart,
        removeOfCart,
        clearCart,
        totalCant,
        isInCart,
        totalShop,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
