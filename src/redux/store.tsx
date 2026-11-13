import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productSlice";
import basketReducer from "./basketSlice";
import wishListReducer from "./wishlist";
import themeReducer from "./themeSlice";
export const store = configureStore({
  reducer: {
    product: ProductReducer,
    basket: basketReducer,
    wishlist: wishListReducer,
    theme: themeReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
