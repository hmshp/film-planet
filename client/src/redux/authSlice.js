import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import login from "../service/auth";
import { saveToken } from "../utils/token";

export const asyncLogin = createAsyncThunk(
  "authSlice/asyncLogin",
  async (user) => {
    const response = await login(user);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: { username: "", token: "", status: "Welcome" },
  // reducers: {
  //   setUsername: (state, action) => {
  //     state.username = action.username;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(asyncLogin.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(asyncLogin.fulfilled, (state, action) => {
      state.status = "Complete";
      saveToken(action.payload.token);
      state.username = action.payload.username;
      state.token = action.payload.token;
    });
    builder.addCase(asyncLogin.rejected, (state, action) => {
      state.status = "Fail";
    });
  },
});
