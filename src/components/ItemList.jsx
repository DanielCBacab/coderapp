import React from "react";
import ItemCard from "./ItemCard";
import Grid from "@mui/material/Grid";

export default function ItemList({ items }) {
  return (
    <>
      {items.map((item) => (
        <Grid item xs={3}>
          <ItemCard item={item} initial={1} />
        </Grid>
      ))}
    </>
  );
}
