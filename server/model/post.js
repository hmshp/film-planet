import { createPost, getPosts, getPostById, updatePost } from '../database/database.js';

export async function getAllByUserId(userId) {
  const posts = await getPosts(userId);
  return posts;
}

export async function create(post) {
  const newPost = await createPost(post);
  return newPost;
}

export async function update(data) {
  const updatedpost = await updatePost(data);
  return updatedpost;
}

export async function getById(id) {
  const post = await getPostById(id);
  return post;
}