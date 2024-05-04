import { configureStore } from "@reduxjs/toolkit";
import linkReducers from "./reducer/linkReducers";

export const store = configureStore({
  reducer: {
    link: linkReducers,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
