import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userInfo",
  initialState: {
    data: null,
    status: "idle",
    error: null,
    navigateToPage: false
  },
  reducers: {
    fetchUserData: (state, action) => {
      state.data = null;
      state.status = "loading";
      state.error = null;
      state.navigateToPage = false;
    },
    fetchUserDataSuccess: (state, action) => {
      state.status = "success";
      state.data = action.payload.info;
      state.error = null;
      state.navigateToPage = action.payload.route;
    },
    fetchUserDataError: (state, action) => {
      state.data = null;
      state.status = "error";
      state.error = action.payload.error;
      state.navigateToPage = action.payload.route;
    },
    clearUserInfo: (state, action) => {
      state.data = null;
      state.status = "idle";
      state.error = null;
      state.navigateToPage = false;
    },
    toggleNavigation: (state, action) => {
      state.navigateToPage = action.payload;
    }
  }
});

export const {
  fetchUserData,
  fetchUserDataSuccess,
  fetchUserDataError,
  clearUserInfo,
  toggleNavigation
} = userSlice.actions;

export default userSlice.reducer;
