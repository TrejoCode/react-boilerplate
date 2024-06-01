/**
 * @description Función para obtener la validación de la sesisón de usuario
 */
const verifySession = (): boolean => {
  const data = localStorage.getItem("session_token");

  if (data) {
    return true;
  } else {
    return false;
  }
};

export const sessionUtils = {
  verifySession,
};
