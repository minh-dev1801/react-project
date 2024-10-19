import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAvailablePlaces } from "../http";

const initialState = {
  places: [],
  isFetching: false,
  error: null,
};

export const fetchAvailablePlacesThunk = createAsyncThunk(
  "places/fetchPlaces",
  async (_, { rejectWithValue }) => {
    try {
      const places = await fetchAvailablePlaces();
      return places;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch places");
    }
  }
);

const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    setPlaces(state, action) {
      state.places = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAvailablePlacesThunk.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(fetchAvailablePlacesThunk.fulfilled, (state, action) => {
        state.isFetching = false;
        state.places = action.payload;
      })
      .addCase(fetchAvailablePlacesThunk.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
      });
  },
});

export const { setPlaces } = placesSlice.actions;
export default placesSlice.reducer;
