import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    Users: userSlice.reducer,
  },
});

export default store;
