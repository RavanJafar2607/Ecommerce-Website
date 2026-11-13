import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { StateType } from "../typed/productInitialStateType";

export const initialState: StateType = {
  products: [],
  loading: false,
  error: null,
  searchText: "",
  selectCategory: "all",
  sortType: "all",
};
export const fetchProduct = createAsyncThunk<
  any[],
  void,
  { rejectValue: string }
>("product/fetchProduct", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Xəta kodu: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Bilinməyən xəta baş verdi");
  }
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    searhProducts: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setCategory: (
      state,
      action: PayloadAction<
        "all" | "men" | "women" | "electronics" | "jewelery"
      >,
    ) => {
      state.selectCategory = action.payload;
    },
    setSort: (
      state,
      action: PayloadAction<
        "all" | "cheap-and-expensive" | "expensive-and-cheap"
      >,
    ) => {
      state.sortType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.products = [];
        state.loading = false;
        state.error = action.payload || "Xəta baş verdi";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products = action.payload;
      });
  },
});

export const { searhProducts, setCategory, setSort } = productSlice.actions;

export default productSlice.reducer;
