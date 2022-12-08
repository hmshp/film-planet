import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./authSlice.js";
import { postSlice } from './postSlice.js';


const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    post: postSlice.reducer
  },
});

export default store;
