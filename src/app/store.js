import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { emailApi } from "../features/email/emailApi";
import authSlice from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    [emailApi.reducerPath]: emailApi.reducer,
    auth: authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emailApi.middleware),
});

export default store;
