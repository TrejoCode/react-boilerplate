/**
 * @description Punto de entrada de la aplicación
 */

import Routes from "./routes";
import { HelmetProvider } from "react-helmet-async";

const App = (): JSX.Element => (
  <div className="App">
    <HelmetProvider>
      <Routes />
    </HelmetProvider>
  </div>
);

export default App;
