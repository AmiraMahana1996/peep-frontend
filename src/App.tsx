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
          spacing={3}
        >
          <Grid
            item
            xs={12}
          >
            <SearchAppBar />
          </Grid>
        </Grid>
        <Grid container>
          <AppRoutes />
        </Grid>
      </Box>
    </Router>
  );
}

export default App;
