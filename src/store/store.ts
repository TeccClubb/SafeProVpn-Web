import { configureStore } from "@reduxjs/toolkit";
import app from "./app.slice";

const store = configureStore({
  reducer: { app },
});

export type RootState = ReturnType<typeof store.getState>;

export type StoreDispatch = typeof store.dispatch;

export default store;
