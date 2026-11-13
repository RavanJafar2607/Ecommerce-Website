import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { wishListInitialState, wishListType } from "../typed/wishListType";
const wishlistData = localStorage.getItem("wishlist");
export const initialState: wishListType = {
  wishList: wishlistData ? JSON.parse(wishlistData) : [],
  wishListState: false,
};

export const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishList: (state, action: PayloadAction<wishListInitialState>) => {
      const isExist = state.wishList.some(
        (item) => item.id === action.payload.id,
      );
      if (!isExist) {
        state.wishList.push(action.payload);
      }
    },
    toggleWishList: (state) => {
      state.wishListState = !state.wishListState;
    },
    removeWishList: (state, action: PayloadAction<number>) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const { addWishList, toggleWishList, removeWishList } =
  wishListSlice.actions;

export default wishListSlice.reducer;
