import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import ProductDetails from "../pages/product-details/ProductDetails";
import Products from "../pages/products/Products";
import ProtectedRoute from "./PrivateRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Products />}
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/product/:id?"
        element={<ProductDetails />}
      />
    </Routes>
  );
}
