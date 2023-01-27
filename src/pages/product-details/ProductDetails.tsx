import React from "react";
import { Grid } from "@mui/material";
export default function ProductDetails() {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ flexGrow: 1 }}
      >
        {Array.from(Array(3)).map((_, index) => (
          <Grid
            xs={2}
            sm={4}
            md={4}
            key={index}
          >
            test
          </Grid>
        ))}
      </Grid>
    </>
  );
}
