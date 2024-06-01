/**
 * @description Manejo de todas las rutas privadas
 */
import { Navigate } from "react-router-dom";
import { sessionUtils } from "@/utils/session";
import type { TypeChildrenProp } from "@/ts/routes";

const PrivateRoute = ({ children }: TypeChildrenProp): JSX.Element => {
  if (sessionUtils.verifySession()) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default PrivateRoute;
