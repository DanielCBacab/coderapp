import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Item = (props) => {
  const { id, name, img, stock, price, category, description } = props;
  const [hover, setHover] = useState(false);

  const cardStyle = {
    body: {
      borderRadius: "1rem",
      borderWidth: "0",
      boxShadow: hover ? "0rem .1rem 1.5rem grey" : "0rem .1rem 1rem grey",
      padding: "0.5rem",
    },

    img: {
      borderRadius: "1rem ",
    },
  };
  return (
    <Card
      style={cardStyle.body}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Card.Img variant="top" src={img} style={cardStyle.img} />
      <Card.Body>
        <Card.Subtitle className="text-muted mt-2">{name}</Card.Subtitle>
        <Card.Title className="text-success">Precio: ${price}</Card.Title>
        <div>
          <Card.Text>Stock: {stock}</Card.Text>
          <Card.Text>
            <strong>Descripción:</strong> <br /> {description}
          </Card.Text>
          <Link
            className="btn btn-success btn-lg w-100 mb-2"
            to={`/item-detail/${id}`}
          >
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
