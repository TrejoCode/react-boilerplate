/**
 * @description Tipado de la respuesta de una petición HTTP
 */

export interface InterfaceApiResponse<T> {
  data?: T;
  error?: string;
}

// Solo con fines de demostración
export interface TypeReqResUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export type TypeReqResponse = {
  page: number;
  total: number;
  per_page: number;
  total_pages: number;
  data: TypeReqResUser[];
};
