import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../pages/products/Products";
export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Products />}
      />
    </Routes>
  );
}
