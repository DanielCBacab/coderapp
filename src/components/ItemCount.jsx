import React, { useState } from "react";
import { render } from "react-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";

export default function ItemCount({ initial, stock }) {
  let [num, setNum] = useState(initial);
  let [onStock, setOnStock] = useState(stock);

  // Incrementa el número a reservar por 1
  let add = () => {
    if (num < onStock) {
      setNum(Number(num) + 1);
    }
  };

  // disminuye el número a reservar por 1
  let substract = () => {
    if (num > 1) {
      setNum(Number(num) - 1);
    }
  };

  // Valida si existen en stock los elementos y actualiza el número máximo de elementos que puedes agregar al carrito
  let addProduct = () => {
    if (onStock > 0) {
      setOnStock(Number(onStock) - Number(num));
      setNum((num = onStock - num));
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Item name
        </Typography>
        <Typography variant="h6">Stock Disponible: {onStock}</Typography>
        <Typography variant="p" component="div">
          Item description, on text line.
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0}
        >
          <Grid item>
            <Button onClick={substract}>
              <RemoveIcon />
            </Button>
          </Grid>
          <Grid item>
            <Typography>{num}</Typography>
          </Grid>
          <Grid item>
            <Button onClick={add}>
              <AddIcon />
            </Button>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="secondary"
          disabled={onStock == 0 ? true : num == 0 ? true : false}
          onClick={addProduct}
        >
          Agregar al carrito
        </Button>
      </CardContent>
    </Card>
  );
}
