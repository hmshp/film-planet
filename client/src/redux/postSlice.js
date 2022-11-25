import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createPost, getPostById, getPosts } from '../service/posts.js';

export const asyncGetPosts = createAsyncThunk(
  "postSlice/asyncGetPosts",
  async () => {
    const posts = await getPosts();
    return posts.data;
  }
)

export const asyncCreatePost = createAsyncThunk(
  "postSlice/asyncCreatePost",
  async(post) => {
    const response = await createPost(post);
    console.log(response);
  }
)

export const asyncGetPostById = createAsyncThunk(
  "postSlice/asyncGetPostById",
  async(id) => {
    const post = await getPostById(id);
    return post.data;
  }
)

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    selectedPost: {},
    status: "Welcome"
  },
  // reducers: {
  //   getPostDetails: (state, action) => {
  //     console.log(action);
  //     state.selectedPost = action.payload;
  //   }
  // },
  extraReducers: (builder) => {
    builder.addCase(asyncGetPosts.pending, (state, action) => {
      state.status = "Loading...";
    })
    builder.addCase(asyncGetPosts.fulfilled, (state, action) => {
      state.status = "Complete";
      state.posts = action.payload;
    })
    builder.addCase(asyncGetPosts.rejected, (state, action) => {
      state.status = "Failed to load";
    })
    builder.addCase(asyncCreatePost.pending, (state, action) => {
      state.status = "Loading...";
    })
    builder.addCase(asyncCreatePost.fulfilled, (state, action) => {
      state.status = "Complete";
    })
    builder.addCase(asyncCreatePost.rejected, (state, action) => {
      state.status = "Failed to load";
    })
    builder.addCase(asyncGetPostById.pending, (state, action) => {
      state.status = "Loading...";
    })
    builder.addCase(asyncGetPostById.fulfilled, (state, action) => {
      state.status = "Complete";
      state.selectedPost = action.payload;
    })
    builder.addCase(asyncGetPostById.rejected, (state, action) => {
      state.status = "Failed to load";
    })
  }
})