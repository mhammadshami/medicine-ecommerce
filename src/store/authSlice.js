import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggIn: true },
  reducers: {
    login(state) {
      state.isLoggIn = true;
    },
    logout(state) {
      state.isLoggIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
