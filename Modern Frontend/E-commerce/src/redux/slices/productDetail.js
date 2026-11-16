import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    data: {},
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(productDetailApi.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(productDetailApi.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    });
    builder.addCase(productDetailApi.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

const { reducer, actions } = productDetailSlice;

const productDetail = reducer;

export const productDetailApi = createAsyncThunk(
  "productDetail/fetch",
  async (id, { rejectWithValue }) => {
    try {
      console.log("productDetailApi", id);
      const response = await axios.get(
        `https://fakestoreapi.com/productsasdasdasdasd/${id}`,
      );
      console.log("response api", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export default productDetail;
