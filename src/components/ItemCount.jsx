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

  let onAdd = () => {
    if (num < stock) {
      setNum(Number(num) + 1);
    }
  };

  let onSubs = () => {
    if (num > 0) {
      setNum(Number(num) - 1);
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Item name
        </Typography>
        <Typography variant="h6">Stock Disponible: {stock}</Typography>
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
            <Button onClick={onSubs}>
              <RemoveIcon />
            </Button>
          </Grid>
          <Grid item>
            <Typography>{num}</Typography>
          </Grid>
          <Grid item>
            <Button onClick={onAdd}>
              <AddIcon />
            </Button>
          </Grid>
        </Grid>
        <Button variant="contained" color="secondary">
          Comprar producto
        </Button>
      </CardContent>
    </Card>
  );
}
