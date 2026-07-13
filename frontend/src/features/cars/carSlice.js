import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
  selectedCar: null,
  loading: false,
  error: null,
};

const carSlice = createSlice({
  name: "cars",

  initialState,

  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },

    setSelectedCar: (state, action) => {
      state.selectedCar = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setCars,
  setSelectedCar,
  setLoading,
  setError,
} = carSlice.actions;

export default carSlice.reducer;