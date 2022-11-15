/**
 * @version 3.0.0
 * @author Trejocode - Sergio
 * @description Manejo de todas las rutas privadas
 */
import React from "react";
import { verifySession } from "auth/sessions";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  if (verifySession()) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default PrivateRoute;
