import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

const reducer = combineReducers({
  user: userSlice
})
export const store = configureStore({
  reducer
})