import { configureStore } from "@reduxjs/toolkit";
import app from "./app.slice";
import plans from "./plans.slice";
import dashboard from "./dashboard.slice";

const store = configureStore({
  reducer: { app, plans, dashboard },
});

export type RootState = ReturnType<typeof store.getState>;

export type StoreDispatch = typeof store.dispatch;

export default store;
