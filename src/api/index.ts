/**
 * @description Cliente HTTP para todas las peticiones Web basada en Axios: GET, POST, PUT, PATCH
 */

import axios, { AxiosError, isAxiosError } from "axios";
import type { InterfaceApiResponse } from "@/ts/api";

const baseUrl = import.meta.env.VITE_API_URL;

const handleRequest = async <T>(
  request: Promise<{ data: T }>
): Promise<InterfaceApiResponse<T>> => {
  try {
    const { data } = await request;
    return { data };
  } catch (error) {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        return { error: axiosError.response.data as string };
      } else if (axiosError.message === "Network Error") {
        return { error: "Sin conexión al servidor" };
      } else {
        return { error: axiosError.message };
      }
    } else {
      return { error: "Ocurrió un error inesperado" };
    }
  }
};

/**
 * @description Realizar petición HTTP GET
 * @param {string} endpoint Endpoint de la solicitud
 * @returns {Promise<InterfaceApiResponse<T>>}
 */
export const get = async <T>(
  endpoint: string
): Promise<InterfaceApiResponse<T>> => {
  return handleRequest<T>(axios.get(`${baseUrl}${endpoint}`));
};

/**
 * @description Realizar petición HTTP POST
 * @param {string} endpoint Endpoint de la solicitud
 * @param {object} payload Objecto body de la solicitud
 * @returns {Promise<InterfaceApiResponse<T>>}
 */
export const post = async <T>(
  endpoint: string,
  payload: object
): Promise<InterfaceApiResponse<T>> => {
  return handleRequest<T>(axios.post(`${baseUrl}${endpoint}`, payload));
};

/**
 * @description Realizar petición HTTP PUT
 * @param {string} endpoint Endpoint de la solicitud
 * @param {object} payload Objecto body de la solicitud
 * @returns {Promise<InterfaceApiResponse<T>>}
 */
export const put = async <T>(
  endpoint: string,
  payload: object
): Promise<InterfaceApiResponse<T>> => {
  return handleRequest<T>(axios.put(`${baseUrl}${endpoint}`, payload));
};

/**
 * @description Realizar petición HTTP PATCH
 * @param {string} endpoint Endpoint de la solicitud
 * @param {object} payload Objecto body de la solicitud
 * @returns {Promise<InterfaceApiResponse<T>>}
 */
export const patch = async <T>(
  endpoint: string,
  payload: object
): Promise<InterfaceApiResponse<T>> => {
  return handleRequest<T>(axios.patch(`${baseUrl}${endpoint}`, payload));
};
