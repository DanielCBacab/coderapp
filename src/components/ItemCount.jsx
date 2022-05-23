import React from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({ max, setCant, cant, onAdd }) => {
  const handleAddItem = () => {
    max > cant
      ? setCant(cant + 1)
      : alert(`No puedes comprar más de ${cant} unidades`);
  };

  const handleRemoveItem = () => {
    cant > 1 ? setCant(cant - 1) : alert("No se pueden elegir menos de 0");
  };

  const handleAddConfig = {
    className: `btn-block ${cant === max ? "btn-danger" : "btn-primary"}`,
    onClick: handleAddItem,
    disabled: cant === max,
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <Button
          onClick={handleRemoveItem}
          className={`btn-block ${cant === 0 ? "btn-secondary" : "btn-info"}`} //👈🏻 Optionanl styling, acompaña al control handleAddItem del ItemCount
          disabled={cant === 0}
        >
          -
        </Button>
        <h2>{cant}</h2>
        <Button {...handleAddConfig}>+</Button>
      </div>
      <div>
        <Button className="btn btn-primary" onClick={onAdd}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
