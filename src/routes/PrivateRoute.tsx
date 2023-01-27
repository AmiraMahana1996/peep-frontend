import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const location = useLocation();
  return true ? (
    <Navigate
      to={"/"}
      state={{ from: location }}
      replace
    />
  ) : (
    children
  );
};

export default ProtectedRoute;
