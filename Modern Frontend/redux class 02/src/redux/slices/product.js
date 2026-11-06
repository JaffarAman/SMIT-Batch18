import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    products: [],
    error: false,

    addToCart: [],
  },
  reducers: {
    loadingProduct(state) {
      state.loading = true;
    },
    addProduct(state, action) {
      //   console.log("addProduct action", action);
      state.loading = false;
      state.products = action.payload;
    },

    addToCart(state, action) {
      console.log("addToCart", action);

      const findProduct = state.addToCart.find(
        (obj) => obj.id === action.payload.id,
      );

      if (!findProduct) {
        state.addToCart.push(action.payload);
      }
    },
  },
});

const { actions, reducer } = productSlice;

export const { addProduct, loadingProduct, addToCart } = actions;
export const productReducer = reducer;
