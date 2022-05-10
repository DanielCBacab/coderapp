import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Grid from "@mui/material/Grid";

const ItemDetailContainer = ({ item }) => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <ItemDetail item={item} initial={10} />
    </Grid>
  );
};

export default ItemDetailContainer;
