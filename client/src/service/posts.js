import axios from "axios";
import { getToken } from '../utils/token';

const baseUrl = "http://localhost:8080";

// 요청 보낼 때 Header Authorization으로 jwt 토큰을 보내면 서버에서 userId를 알아서 찾은 다음 그걸 활용해서 클라이언트의 요청을 처리해 준다
export async function getPosts() {
  const posts = await axios.get(`${baseUrl}/posts`, {
    headers: getHeaders()
  })
  console.log(posts);
}

function getHeaders() {
  const token = getToken();
  console.log(token);
  return { Authorization: `Bearer ${token}`}
}

// createPost 요청 보낼 때 파라미터로 userId도 보내야 되는데
// userId는 토큰과 jwt.verify 이용해서 가져오기

// export function test() {
//   const token = getToken();
//   const userId = getId(token);
//   console.log(userId);
// }

// 서버에 jwt token 보내주면서 "나야..!" 인증하고 userId 받기

