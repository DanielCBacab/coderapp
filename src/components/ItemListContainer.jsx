import React, { useState } from "react";
import ItemCount from "./ItemCount";
import Grid from "@mui/material/Grid";

export default function ItemListContainer({ text }) {
  //const [counter, setCounter] = useState(0);

  return (
    <Grid justifyContent="center" alignItems="center">
      <h1>{text}</h1>
      <ItemCount stock="10" initial="1" />
    </Grid>
  );
}
