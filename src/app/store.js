import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { contactsApi } from "../features/contactsApi";

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

export default store;
