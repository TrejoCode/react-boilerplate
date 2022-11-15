/**
 * @version 3.0.0
 * @author Trejocode - Sergio
 * @description Manejo de todas las rutas de la aplicación
 * @process 3
 */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./private";
import RestrictRoute from "./restrict";

/**
 * @description Incorporación de todas las rutas
 */
import PageIndex from "pages";
import PageFetching from "pages/fetching";
import PagePrivate from "pages/private";
import PageRestrict from "pages/restrict";
import Page404 from "pages/404";

const Router = () => (
  <BrowserRouter>
    <div className="flex main">
      <div className="column full">
        <Routes>
          <Route path="/" element={<PageIndex />} />
          <Route path="/fetch" element={<PageFetching />} />
          <Route
            path="/private"
            element={
              <PrivateRoute>
                <PagePrivate />
              </PrivateRoute>
            }
          />
          <Route
            path="/restrict"
            element={
              <RestrictRoute>
                <PageRestrict />
              </RestrictRoute>
            }
          />
          <Route element={<Page404 />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default Router;
