/**
 *  @version 1.0.0
 *  @author Trejocode - Sergio
 *  @description Manejo de sesión de usuario
*/

/**
 * @description: Función para obtener validar la sesisón de usuario: CONFIGURARA A NECESIDAD
*/
export const verifySession = () => {
    const data = localStorage.getItem("session_token");
    if (data) {
        return true;
    } else {
        return false;
    }
}; 