import { configureStore } from "@reduxjs/toolkit";
import userPlacesReducer from "./userPlacesSlice.js";
import placesReducer from "./placesSlice.js";

const store = configureStore({
  reducer: {
    userPlaces: userPlacesReducer,
    places: placesReducer,
  },
});

export default store;