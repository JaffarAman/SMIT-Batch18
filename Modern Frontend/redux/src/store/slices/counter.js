import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counterValue: 0,
  },
  reducers: {
    addCounter() {},
    minusCounter() {},
  },
});

const { reducer, actions } = counterSlice;

export const { addCounter, minusCounter } = actions;

export const counterReducer = reducer;
