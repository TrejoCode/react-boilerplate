/**
 * @version 3.0.0
 * @author Trejocode - Sergio
 * @description Cliente HTTP para todas las peticiones Web basada en Axios: GET, POST, PUT, PATCH
 */

import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL;

/**
 * @description Realizar petición HTTP GET
 * @param { String } endpoint: Endpoint de la solicitud
 */
export const get = async (endpoint) => {
  try {
    const { data } = await axios.get(`${baseUrl}${endpoint}`);
    return { data };
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      if (error.message === "Network Error")
        return { error: "Sin conexión al servidor" };
      return { error: error.message };
    }
  }
};

/**
 * @description Realizar petición HTTP POST
 * @param { String } endpoint: Endpoint de la solicitud
 * @param { Object } payload: Objecto body de la solicitud
 */
export const post = async (endpoint, payload) => {
  try {
    const { data } = await axios.post(`${baseUrl}${endpoint}`, payload);
    return { data };
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      if (error.message === "Network Error")
        return { error: "Sin conexión al servidor" };
      return { error: error.message };
    }
  }
};

/**
 * @description Realizar petición HTTP PUT
 * @param { String } endpoint: Endpoint de la solicitud
 * @param { Object } payload: Objecto body de la solicitud
 */
export const put = async (endpoint, payload) => {
  try {
    const { data } = await axios.put(`${baseUrl}${endpoint}`, payload);
    return { data };
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      if (error.message === "Network Error")
        return { error: "Sin conexión al servidor" };
      return { error: error.message };
    }
  }
};

/**
 * @description Realizar petición HTTP PATCH
 * @param { String } endpoint: Endpoint de la solicitud
 * @param { Object } payload: Objecto body de la solicitud
 */
export const patch = async (endpoint, payload) => {
  try {
    const { data } = await axios.patch(`${baseUrl}${endpoint}`, payload);
    return { data };
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      if (error.message === "Network Error")
        return { error: "Sin conexión al servidor" };
      return { error: error.message };
    }
  }
};
