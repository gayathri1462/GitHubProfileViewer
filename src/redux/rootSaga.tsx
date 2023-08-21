import { all } from "redux-saga/effects";
import { fetchUserDetailsWatcher } from "./user/userSaga";
import { fetchFollowersDetailsWatcher } from "./followers/followersSaga";
import { fetchFollowingDetailsWatcher } from "./following/followingSaga";

function* rootSaga() {
  yield all([
    fetchUserDetailsWatcher(),
    fetchFollowersDetailsWatcher(),
    fetchFollowingDetailsWatcher()
  ]);
}

export default rootSaga;
