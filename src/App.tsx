import React from "react";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";
import { Box, Grid } from "@mui/material";
import SearchAppBar from "./components/navbar/Navbar";
function App() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            xs={12}
          >
            <SearchAppBar />
          </Grid>

          <Grid
            item
            xs={12}
          >
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent={"center"}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <AppRoutes />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Router>
  );
}

export default App;
