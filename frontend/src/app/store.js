import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import carReducer from "../features/cars/carSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cars: carReducer,
    wishlist: wishlistReducer,
    user: userReducer,
  },
});