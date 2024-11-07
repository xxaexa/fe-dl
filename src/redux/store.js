import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/user";
import githubReducer from "./features/githubUser/githubUser";

const store = configureStore({
  reducer: {
    users: userReducer,
    github: githubReducer,
  },
});

export default store;
