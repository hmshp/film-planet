import * as postRepository from "../model/post.js";

export async function createPost(req, res) {
  const { title, review, comment, url, userId } = req.body;
  const post = await postRepository.create({
    title,
    review,
    comment,
    url,
    userId,
  });
  res.status(201).json(post);
}

export async function getPosts(req, res) {
  const userId = req.body.userId;
  console.log(`userId: ${userId}`);
  const posts = await postRepository.getAllByUserId(userId);
  const mappedPosts = posts.map((post) => mapPost(post));
  res.status(200).json(mappedPosts);
}

export async function getPostById(req, res) {
  const id = req.params.id;
  const post = await postRepository.getById(id);
  if (!post) {
    return res.status(404).json(`Post id ${id} not found`);
  }
  const mappedPost = mapPost(post);
  res.status(200).json(mappedPost);
}

export async function updatePost(req, res) {
  const id = req.params.id;
  const { title, comment, review, url } = req.body;
  const updatedPost = await postRepository.update({title, comment, review, url, id});
  if (!updatedPost) {
    return res.status(404).json(`Post id ${id} not found`);
  }
  res.status(200).json(updatedPost);
}

export async function deletePost(req, res) {
  const id = req.params.id;
  const deletedPost = await postRepository.remove(id);
  res.status(204).json("delete 테스트 중");
}

// 앱에서는 '_id' 가 아니가 'id' 형태로 사용하므로 변환하는 게 좋은 듯
function mapPost(post) {
  return { ...post, id: post._id };
}

// export async function getPost(req, res) {
//   // 게시물 클릭했을 때 상세 정보 보기
//   const id = req.params.id;
//   const post = await postRepository.getById(id);
//   if (post) {
//     res.status(200).json(post);
//   } else {
//     res.status(404).json({ message: `post id(${id}) not found` });
//   }
// }

// 몇 개 항목을 수정할지 모르는데, 몇 개 든 다 잘 수정되게 하려면 어떻게 해야 할지???
// 우선 다 수정한다는 시나리오로 API 작성했다.
// export async function updatePost(req, res) {
//   const { id } = req.params;
//   const { title, price, category, desc, url } = req.body;
//   const post = await postRepository.update(
//     id,
//     title,
//     price,
//     category,
//     desc,
//     url
//   );
//   if (post) {
//     res.status(200).json(post);
//   } else {
//     res.status(404).json({ message: `post id(${id}) not found` });
//   }
// }

// export async function deletePost(req, res) {
//   const id = req.params.id;
//   await postRepository.remove(id);
//   res.status(204).json({ message: `post id ${id} successfully deleted` });
// }
