import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./authSlice.js";

const store = configureStore({
  reducer: {
    user: userSlice.reducer
  },
});

export default store;