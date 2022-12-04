import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, me, signup } from "../service/auth";
import { getToken, saveToken } from "../utils/token";

export const asyncLogin = createAsyncThunk(
  "authSlice/asyncLogin",
  async (user) => {
    const response = await login(user);
    return response.data;
  }
);

export const asyncSignup = createAsyncThunk(
  "authSlice/asyncSignup",
  async (user) => {
    const response = await signup(user);
    console.log(response);
  }
);

export const asyncCheckValidLogin = createAsyncThunk(
  "authSlice/asyncCheckValidLogin",
  async () => {
    const response = await me();
    return response;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: { username: "", status: "Welcome" },
  // reducers: {
  //   getToken: (state, action) => {
  //     state.token = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(asyncLogin.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(asyncLogin.fulfilled, (state, action) => {
      state.status = "success";
      saveToken(action.payload.token);
    });
    builder.addCase(asyncLogin.rejected, (state, action) => {
      state.status = "rejected";
    });
    builder.addCase(asyncCheckValidLogin.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(asyncCheckValidLogin.fulfilled, (state, action) => {
      state.status = "success";
      state.username = action.payload;
    });
  },
});
