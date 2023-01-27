import React from "react";
import { Routes, Route } from "react-router-dom";

// import PrivateRoute from './PrivateRoute';
import Home from "../pages/home/Home";
export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      {/* <Route
        path="/contactUs"
        exact
        component={ContactUs}
      />
      <Route
        path="/articles"
        exact
        component={Articles}
      /> */}
      {/* <PrivateRoute path="/counter" exact component={Counter} /> */}
    </Routes>
  );
}
