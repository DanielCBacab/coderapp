import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Item = (props) => {
  const { id, name, img, stock, price, category, description } = props;
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Subtitle className="text-muted">{name}</Card.Subtitle>
        <Card.Title>Precio: ${price}</Card.Title>
        <div>
          <Card.Text>Stock: {stock}</Card.Text>
          <Card.Text>
            <strong>Descripción:</strong> <br /> {description}
          </Card.Text>
          <Link className="btn btn-primary" to={`/item-detail/${id}`}>
            Ver producto
          </Link>
        </div>
        <small>
          Categoría: <span className="badge bg-secondary">{category}</span>
        </small>
      </Card.Body>
    </Card>
  );
};

export default Item;
