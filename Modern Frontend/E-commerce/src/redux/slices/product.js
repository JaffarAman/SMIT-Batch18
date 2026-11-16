import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    addToCart: [],
  },
  reducers: {
    addProduct(state, { payload }) {
      console.log("addProduct", payload);
      state.products = payload;
    },

    addToCart(state, { payload }) {
      console.log("addToCart payload", payload);
      const findProduct = state.addToCart.findIndex(
        (obj) => obj.id === payload.id,
      );
      if (findProduct == -1) {
        state.addToCart.push(payload);
      }
    },
  },
});

const { actions, reducer } = productSlice;

const productReducer = reducer;
export const { addProduct, addToCart } = actions;

export default productReducer;
