import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/counter";

const store = configureStore({
  reducer: {
    counterReducer,
  },
});

export default store;
