import React from "react";
import { Grid } from "@mui/material";
import "./style.css";
export default function Dashboard() {
  return (
    <>
      <Grid
        container
        className="dashboard-container"
      >
        <Grid
          item
          xs={12}
        >
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
            placeat voluptatum labore iure officiis laborum quae atque adipisci
            tempore vitae, corporis qui consequuntur. Nihil fuga ullam voluptas,
            et magnam quod.
          </h1>
        </Grid>
      </Grid>
    </>
  );
}
