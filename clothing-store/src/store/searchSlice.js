import { createSlice } from "@reduxjs/toolkit";
import { PRODUCT_LIST } from "../data/product-list";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    results: PRODUCT_LIST,
  },
  reducers: {
    performSearch(state, action) {
      state.query = action.payload;
      if (state.query.trim() === "") {
        state.results = PRODUCT_LIST;
      } else {
        state.results = PRODUCT_LIST.filter((product) =>
          product.title.toLowerCase().includes(state.query.toLowerCase())
        );
      }
    },
  },
});

export const { performSearch } = searchSlice.actions;
export default searchSlice.reducer;
