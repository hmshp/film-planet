import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, signup } from "../service/auth";
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
)

export const userSlice = createSlice({
  name: "user",
  initialState: { token: "", status: "Welcome" },
  reducers: {
    getToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncLogin.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(asyncLogin.fulfilled, (state, action) => {
      state.status = "Complete";
      saveToken(action.payload.token);
    });
    builder.addCase(asyncLogin.rejected, (state, action) => {
      state.status = "Failed to load";
    });
  },
});
