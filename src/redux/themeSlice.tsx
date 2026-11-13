import { createSlice } from "@reduxjs/toolkit";
import type { themeInitialState } from "../typed/themeType";
const savedTheme = localStorage.getItem("app_theme") || "light";
export const initialState: themeInitialState = {
  theme: savedTheme,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeSwicth: (state) => {
      const nextTheme = state.theme === "light" ? "dark" : "light";
      state.theme = nextTheme;

      localStorage.setItem("app_theme", nextTheme);
    },
  },
});

export const { themeSwicth } = themeSlice.actions;

export default themeSlice.reducer;
