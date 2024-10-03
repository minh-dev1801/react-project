import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import searchReducer from "./searchSlice";
import paginationReducer from "./paginationSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        search: searchReducer,
        pagination: paginationReducer,
    }
})

export default store;
