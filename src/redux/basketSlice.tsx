import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { basketInitialState, basketType } from "../typed/basketType";
const localData = localStorage.getItem("basket");
export const initialState: basketType = {
  basket: localData ? JSON.parse(localData) : [],
  basketState: false,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action: PayloadAction<basketInitialState>) => {
      const product = state.basket.find(
        (item) => item.id === action.payload.id,
      );

      if (product) {
        product.quantity += 1;
      } else {
        state.basket.unshift({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    quantityincrease: (state, action: PayloadAction<number>) => {
      const product = state.basket.find((item) => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    quantitydecrease: (state, action: PayloadAction<number>) => {
      const product = state.basket.find((item) => item.id === action.payload);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        }
      } else {
        state.basket = state.basket.filter(
          (item) => item.id !== action.payload,
        );
      }
    },
    removeItems: (state, action: PayloadAction<number>) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
    toggleBasket: (state) => {
      state.basketState = !state.basketState;
    },
  },
});

export const {
  addBasket,
  quantityincrease,
  quantitydecrease,
  removeItems,
  toggleBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
