import { configureStore } from '@reduxjs/toolkit';
import newsReducer from "./src/features/newsSlice"

export const store = configureStore({
  reducer: {
    news : newsReducer
  },
});