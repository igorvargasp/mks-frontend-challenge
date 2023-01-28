import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  items: Product[];
  totalAmount: number;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  quantity?: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      console.log(existingItem);
      if (existingItem) {
        existingItem.quantity
          ? existingItem.quantity++
          : (existingItem.quantity = 1);
        state.totalAmount += Number(existingItem.price);
      } else {
        newItem?.quantity ? newItem.quantity++ : (newItem.quantity = 1);
        state.totalAmount += Number(newItem.price);
        state.items.push({
          ...newItem,
        });
      }
    },
    removeItem: (state, action: PayloadAction<Product>) => {
      const updatedItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === updatedItem.id
      );
      if (existingItem) {
        existingItem.quantity ? existingItem.quantity-- : null;
        state.totalAmount -= Number(existingItem.price);
        if (existingItem.quantity === 0) {
          state.totalAmount = 0;
          state.items = state.items.filter(
            (item) => item.id !== existingItem.id
          );
        }
      }
    },
    clearItem: (state, action: PayloadAction<Product>) => {
      const updatedItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === updatedItem.id
      );
      if (existingItem && existingItem.quantity) {
        for (let i = 0; i < existingItem.quantity; i++) {
          state.totalAmount -= Number(existingItem.price);
        }
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      }
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
