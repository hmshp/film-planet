import * as postRepository from "../model/post.js";

export async function createPost(req, res) {
  const { title, review, comment, url, userId } = req.body;
  console.log(" === 여기는 controller 내부 === ");
  console.log(req.body);
  const post = await postRepository.create({
    title,
    review,
    comment,
    url,
    userId,
  });
  res.status(201).json(post);
}

