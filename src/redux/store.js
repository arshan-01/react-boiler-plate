// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import { loadingMiddleware } from "./middlewares/loading.middleware";

// Create a persist config
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: [], // Add the auth reducer to persist
}

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for persist
    }).concat(loadingMiddleware),
})

export const persistor = persistStore(store); // export the persistor
export default store;