import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./slices/counter";
import { productReducer } from "./slices/product";

export const store = configureStore({
  reducer: {
    CounterReducer: CounterReducer,
    productReducer: productReducer,
  },
});
