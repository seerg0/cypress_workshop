import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/slice";

export default configureStore({
  reducer: { user: userReducer },
});
