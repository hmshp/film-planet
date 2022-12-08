import axios from "axios";
import { getHeaders } from "../utils/getHeaders";
import { deleteToken} from "../utils/token";

const baseUrl = process.env.REACT_APP_BASE_URL;

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
    email,
  });

  return response;
}

export async function checkUsernameAvailibility(username) {
  const response = await axios.post(`${baseUrl}/auth/exists/username`, {
    username: username
  })
  const availability = response.data;
  return availability;
}

// 서버에 "내 토큰 아직도 유효해? 유효한지 알려줘." 라는 요청 보내기
export async function me() {
  return axios
    .get(`${baseUrl}/auth/me`, {
      headers: getHeaders(),
    })
    .then((response) => {
      return response.data.username;
    })
    .catch(function (error) {
      if (error.response.status === 401) {
        return null;
      } else if (error.request) {
        // 요청이 전송되었지만, 응답이 수신되지 않은 경우
        console.log(error.request);
      }
    });
}

export function logout() {
  deleteToken();
}
