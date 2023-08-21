import { combineReducers } from "redux";

import userReducer from "./user/userSlice";
import followersSlice from "./followers/followersSlice";
import followingSlice from "./following/followingSlice";

const rootReducer = combineReducers({
  userInfo: userReducer,
  followersInfo: followersSlice,
  followingInfo: followingSlice
});

export default rootReducer;
