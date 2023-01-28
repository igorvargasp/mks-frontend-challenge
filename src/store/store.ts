import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cartReducer } from "./sliceCart";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
