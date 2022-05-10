import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";

export default function ItemCard({ item, initial }) {
  let [num, setNum] = useState(initial);
  let [onStock, setOnStock] = useState(item.stock);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <CardMedia
          component="img"
          image={`https://picsum.photos/id/${item.id}00/300/200`}
          alt={item.title}
        />
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Precio: {item.price}
        </Typography>
        <Typography variant="h6">Stock Disponible: {onStock}</Typography>
        <Typography variant="p" component="div">
          {item.shortDescription}
        </Typography>

        <Button
          href={`/item-detail/id/${item.id}`}
          variant="contained"
          color="secondary"
        >
          Ver detalle del producto
        </Button>
      </CardContent>
    </Card>
  );
}
