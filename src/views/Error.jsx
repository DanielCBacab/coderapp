import React from "react";
import { Grid, Typography } from "@mui/material";

const Error = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h1">
          Upps!!.. no se encontró esta sección, verifica la dirección.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Error;
