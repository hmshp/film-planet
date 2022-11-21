import axios from "axios";
import { useDispatch } from 'react-redux';
import { saveToken } from "../utils/token";

const baseUrl = "http://localhost:8080";

export default async function login(user) {
  const { username, password } = user;

  const response = await axios.post(`${baseUrl}/auth/login`, {
    username,
    password,
  });

  return response;
}
