import { createSlice } from "@reduxjs/toolkit";
import { PRODUCT_LIST } from "../data/product-list";

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      const product = PRODUCT_LIST.find((product) => product.id === id);
      if (!product) return;
      if (item) {
        item.count += 1;
      } else {
        state.items.push({
          id: product.id,
          title: product.title,
          price: product.price,
          count: 1,
        });
      }
      state.total = state.items.reduce(
        (sum, item) => item.price * item.count + sum,
        0
      );
    },
    updateCartItemQuantity(state, action) {
      const { id, number } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.count += number;
        if (item.count <= 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
      state.total = state.items.reduce(
        (sum, item) => item.price * item.count + sum,
        0
      );
    },
  },
});

export const { addItemToCart, updateCartItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
