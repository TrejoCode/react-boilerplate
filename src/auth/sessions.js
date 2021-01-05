/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Función para obtener la validación de la sesisón de usuario
*/

export const verifySession = _ => {

    const data = localStorage.getItem("session_token");

    if (data) {
        return true;
    } else {
        return false;
    }

}; 