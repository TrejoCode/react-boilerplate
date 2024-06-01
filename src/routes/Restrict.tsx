/**
 *  @description Manejo de todas las rutas restringidas
 */
import { Navigate } from "react-router-dom";
import { sessionUtils } from "@/utils/session";
import type { TypeChildrenProp } from "@/ts/routes";

const RestrictRoute = ({ children }: TypeChildrenProp): JSX.Element => {
  if (sessionUtils.verifySession()) {
    return <Navigate to="/404" replace />;
  } else {
    return children;
  }
};

export default RestrictRoute;
