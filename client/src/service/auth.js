import axios from "axios";

const baseUrl = "http://localhost:8080";

export async function login(user) {
  const { username, password } = user;

  const response = await axios.post(`${baseUrl}/auth/login`, {
    username,
    password,
  });

  return response;
}

export async function signup(user) {
  const { username, password, name, email } = user;
  console.log(user);

  const response = await axios.post(`${baseUrl}/auth/signup`, {
    username,
    password,
    name,
    email
  })

  return response;
}
