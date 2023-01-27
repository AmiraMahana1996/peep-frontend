import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "../../components/navbar/Navbar";

export default function VariableWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
        >
          <ResponsiveAppBar />
        </Grid>
      </Grid>
    </Box>
  );
}
