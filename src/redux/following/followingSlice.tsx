import { createSlice } from "@reduxjs/toolkit";
export const followingSlice = createSlice({
  name: "followingInfo",
  initialState: {
    data: null,
    status: "idle",
    error: null
  },
  reducers: {
    fetchFollowingData: (state, action) => {
      state.data = null;
      state.status = "loading";
      state.error = null;
    },
    fetchFollowingDataSuccess: (state, action) => {
      state.data = action.payload;
      state.status = "success";
      state.error = null;
    },
    fetchFollowingDataFailure: (state, action) => {
      state.data = null;
      state.status = "failure";
      state.error = action.payload;
    }
  }
});

export const {
  fetchFollowingData,
  fetchFollowingDataSuccess,
  fetchFollowingDataFailure
} = followingSlice.actions;

export default followingSlice.reducer;
