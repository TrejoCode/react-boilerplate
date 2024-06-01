/**
 * @description Punto de Entrada de React
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// Importar la fuente de IBM Plex Sans
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";

// Importar los estilos globales
import "./sass/style.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
