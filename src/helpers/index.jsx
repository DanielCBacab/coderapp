export const dameTotat = (cart) => {
  let suma = 0;
  for (let i = 0; i < cart.length; i++) {
    suma = suma + cart[i].cant * cart[i].price;
  }
  return suma;
};

export const verificaSiExisteEnCarrito = (carrito, item) => {
  return carrito.some((a) => a.id === item.id);
};

export const unificarItems = (carrito, item) => {
  return carrito.map((a) => {
    if (a.id === item.id) {
      a.cantidad = item.cantidad;
      a.stock = item.stock;
    }
    return a;
  });
};

export const validateFullFilled = (campos) => {
  return campos.some((campo) => campo === "");
};
