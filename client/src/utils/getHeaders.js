import { getToken } from './token';

export function getHeaders() {
  const token = getToken();
  return { Authorization: `Bearer ${token}` };
}