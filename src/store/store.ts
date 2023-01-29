import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./sliceCart";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
