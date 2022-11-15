/**
 * @version 3.0.0
 * @author Trejocode - Sergio
 * @description Punto de Entrada de React
 * @process 1
 */

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";

/**
 * @description Cargar la hoja de estilos, requiere SASS
 */
import "./sass/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

/**
 * @description Registra el Service Worker para una PWA
 * @url https://create-react-app.dev/docs/making-a-progressive-web-app
 */
serviceWorkerRegistration.unregister();
reportWebVitals();
