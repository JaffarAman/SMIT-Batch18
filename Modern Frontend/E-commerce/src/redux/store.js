import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import storageEngine from "redux-persist/lib/storage";

import productReducer from "./slices/product";
import productDetail from "./slices/productDetail";

// 1. Combine your reducers
const rootReducer = combineReducers({
  productReducer,
  productDetail,
});

// 2. Define the persist configuration
const persistConfig = {
  key: "root",
  version: 1,
  storage: storageEngine.default || storageEngine,
  // Optional: Specify which slices to persist (or use 'blacklist' to exclude)
  whitelist: ["productReducer"],
};

// 3. Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions to prevent serializability warnings
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// const store = configureStore({
//   reducer: {
//     productReducer,
//   },
// });

// 5. Export the persistor
export const persistor = persistStore(store);
export default store;
