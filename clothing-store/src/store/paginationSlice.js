import { createSlice } from "@reduxjs/toolkit";
import { PRODUCT_LIST } from "../data/product-list";

const initialState = {
  currentPage: 1,
  itemsPerPage: 8,
  totalPages: Math.ceil(PRODUCT_LIST.length / 8),
  itemsList: [...PRODUCT_LIST.slice(0, 8)],
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
      const indexFirst = state.currentPage * state.itemsPerPage;
      const indexLast = indexFirst - state.itemsPerPage;
      console.log(indexFirst, indexLast);
      state.itemsList = [...PRODUCT_LIST.slice(indexLast, indexFirst)];
    },
  },
});
export const { setCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;
