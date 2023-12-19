import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import counterReducer from "./counterReducer";
import todo from "./Reducer/todo";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer, todo: todo },
});

export default store;
