import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    //global state
    counterValue: 0,
  },
  reducers: {
    addCounter(state, action) {
      //   console.log("SLICE REDUCER CALL", state.counterValue, action);
      state.counterValue = ++state.counterValue;
    },
    minusCounter(state) {
      console.log("minusCounter");
      if (state.counterValue > 0) {
        state.counterValue = --state.counterValue;
      }
    },
  },
});

const { actions, reducer } = counterSlice;

export const CounterReducer = reducer; // STORE
export const { addCounter, minusCounter } = actions; //UI
