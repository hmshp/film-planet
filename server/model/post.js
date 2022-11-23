import { createPost, getPosts } from '../database/database.js';

export async function getAllByUserId(userId) {
  const posts = await getPosts(userId);
  return posts;
}

export async function create(post) {
  const newPost = await createPost(post);
  return newPost;
}