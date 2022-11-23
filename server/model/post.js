import { createPost, getPostCollection } from '../database/database.js';

export async function create(post) {
  const newPost = await createPost(post);
  return newPost;
}