import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLoading = true;
    },
    logout(state) {
      state.isLoading = false;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
