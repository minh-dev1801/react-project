import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserPlaces, updateUserPlaces } from "../http.js";

export const fetchUserPlacesThunk = createAsyncThunk(
  "places/fetchUserPlaces",
  async (_, { rejectWithValue }) => {
    try {
      const userPlaces = await fetchUserPlaces();
      return userPlaces;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch user places");
    }
  }
);

export const updateUserPlacesThunk = createAsyncThunk(
  "places/updateUserPlaces",
  async (userPlaces, { rejectWithValue }) => {
    try {
      await updateUserPlaces(userPlaces);
      return userPlaces;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to update user places");
    }
  }
);

const initialState = {
  userPlaces: [],
  isFetching: false,
  error: null,
  errorUpdatingPlaces: null,
  modalIsOpen: false,
  selectedPlace: null,
};

const userPlacesSlice = createSlice({
  name: "userPlaces",
  initialState,
  reducers: {
    openModal(state, action) {
      state.modalIsOpen = true;
      state.selectedPlace = action.payload;
    },
    closeModal(state) {
      state.modalIsOpen = false;
      state.selectedPlace = null;
    },
    clearError(state) {
      state.errorUpdatingPlaces = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserPlacesThunk.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(fetchUserPlacesThunk.fulfilled, (state, action) => {
        state.isFetching = false;
        state.userPlaces = action.payload;
      })
      .addCase(fetchUserPlacesThunk.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
      })
      .addCase(updateUserPlacesThunk.pending, (state) => {
        state.errorUpdatingPlaces = null;
      })
      .addCase(updateUserPlacesThunk.fulfilled, (state, action) => {
        state.userPlaces = action.payload;
      })
      .addCase(updateUserPlacesThunk.rejected, (state, action) => {
        state.errorUpdatingPlaces = action.payload;
      });
  },
});

export const { openModal, closeModal, clearError } = userPlacesSlice.actions;
export default userPlacesSlice.reducer;
