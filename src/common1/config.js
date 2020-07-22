import { API_URL } from "./environments";

export const configApi = {
  baseURL: `${API_URL}/`,
  headers: { Accept: 'application/json', 'Content-type': 'application/json' }
}