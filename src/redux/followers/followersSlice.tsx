import { createSlice } from "@reduxjs/toolkit";

export const followersSlice = createSlice({
  name: "followersInfo",
  initialState: {
    data: null,
    status: "idle",
    error: null
  },
  reducers: {
    fetchFollowersData: (state, action) => {
      state.data = null;
      state.status = "loading";
      state.error = null;
    },
    fetchFollowersDataSuccess: (state, action) => {
      state.data = action.payload;
      state.status = "success";
      state.error = null;
    },
    fetchFollowersDataError: (state, action) => {
      state.data = null;
      state.status = "error";
      state.error = action.payload;
    }
  }
});

export const {
  fetchFollowersData,
  fetchFollowersDataSuccess,
  fetchFollowersDataError
} = followersSlice.actions;

export default followersSlice.reducer;
