import React from "react";
import { Grid } from "@mui/material";
import "./style.css";
export default function Favorite() {
  return (
    <>
      <Grid
        container
        className="favorite-container"
      >
        <Grid
          item
          xs={12}
        >
          <h1>Favorite Page</h1>
        </Grid>
      </Grid>
    </>
  );
}
