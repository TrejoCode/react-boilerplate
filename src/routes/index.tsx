/**
 * @description Manejo de todas las rutas de la aplicación
 */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./Private";
import RestrictRoute from "./Restrict";

// Importar todas las páginas de la aplicación
import PageIndex from "@/pages/Index";
import Page404 from "@/pages/NotFound";
import PagePrivate from "@/pages/Private";
import PageFetching from "@/pages/Fetching";
import PageRestrict from "@/pages/Restrict";

const Router = (): JSX.Element => (
  <BrowserRouter>
    <div className="flex main">
      <div className="column full">
        <Routes>
          <Route path="/" element={<PageIndex />} errorElement={<Page404 />} />
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
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default Router;
