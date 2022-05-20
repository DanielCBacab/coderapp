import React from "react";
import ItemCard from "./ItemCard";
import Grid from "@mui/material/Grid";

export default function ItemList({ name, id }) {
  return (
    <>
      {id.map((item) => (
        <Grid item xs={3}>
          <ItemCard name={item.name} initial={1} />
        </Grid>
      ))}
    </>
  );
}
