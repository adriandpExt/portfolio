import { configureStore } from "@reduxjs/toolkit";
import linkReducers from "./reducer/linkReducers";
import contactReducers from "./reducer/contactReducers";

export const store = configureStore({
  reducer: {
    link: linkReducers,
    contact:contactReducers
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
