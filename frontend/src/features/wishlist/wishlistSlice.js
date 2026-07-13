import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState,

  reducers: {
    addWishlist: (state, action) => {
      const exists = state.wishlist.find(
        (item) => item._id === action.payload._id
      );

      if (!exists) {
        state.wishlist.push(action.payload);
      }
    },

    removeWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item._id !== action.payload
      );
    },

    clearWishlist: (state) => {
      state.wishlist = [];
    },
  },
});

export const {
  addWishlist,
  removeWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;