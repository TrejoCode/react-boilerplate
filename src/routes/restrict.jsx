/**
 *  @version 3.0.0
 *  @author Trejocode - Sergio
 *  @description Manejo de todas las rutas restringidas
 */
import React from "react";
import { verifySession } from "auth/sessions";
import { Navigate } from "react-router-dom";

const RestrictRoute = ({ children }) => {
  if (verifySession()) {
    return <Navigate to="/404" replace />;
  } else {
    return children;
  }
};

export default RestrictRoute;
