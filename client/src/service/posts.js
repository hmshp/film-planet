import axios from "axios";
import { getHeaders } from "../utils/getHeaders.js";

const baseUrl = process.env.REACT_APP_BASE_URL;

// 요청 보낼 때 Header Authorization으로 jwt 토큰을 보내면 서버에서 userId를 알아서 찾은 다음 그걸 활용해서 클라이언트의 요청을 처리해 준다

export async function getPosts() {
  const posts = await axios.get(`${baseUrl}/posts`, {
    headers: getHeaders(),
  });
  return posts;
}

export async function createPost(post) {
  console.log(post);
  const response = await axios.post(
    `${baseUrl}/posts`,
    {
      title: post.title,
      review: post.review,
      url: post.url,
      comment: post.comment,
    },
    {
      headers: getHeaders(),
    }
  );
  return response;
}

export async function updatePost(data) {
  const { formData, id } = data;
  const { title, review, comment, url } = formData;
  const response = await axios.put(
    `${baseUrl}/posts/${id}`,
    {
      title,
      review,
      comment,
      url,
    },
    {
      headers: getHeaders(),
    }
  );
  console.log(response);
}

export async function deletePost(id) {
  await axios.delete(`${baseUrl}/posts/${id}`, {
    headers: getHeaders(),
  });
}

export async function getPostById(id) {
  const response = await axios.get(`${baseUrl}/posts/${id}`, {
    headers: getHeaders(),
  });
  return response;
}

// createPost 요청 보낼 때 파라미터로 userId도 보내야 되는데
// userId는 토큰과 jwt.verify 이용해서 가져오기

// export function test() {
//   const token = getToken();
//   const userId = getId(token);
//   console.log(userId);
// }

// 서버에 jwt token 보내주면서 "나야..!" 인증하고 userId 받기
