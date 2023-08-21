import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

import {
  fetchUserData,
  fetchUserDataSuccess,
  fetchUserDataError
} from "./userSlice";

import { fetchFollowersDetailsSaga } from "../followers/followersSaga";
import { fetchFollowingDetailsSaga } from "../following/followingSaga";

function* fetchUserDetailsSaga(action) {
  try {
    const response = yield call(
      axios.get,
      `https://api.github.com/users/${action.payload}`
    );
    const data = response?.data;

    yield put(fetchUserDataSuccess({ info: data, route: true }));

    yield call(fetchFollowersDetailsSaga, {
      payload: {
        userName: data?.login,
        perPage: 4,
        page: 1,
        totalFollowers: data?.followers
      }
    });

    yield call(fetchFollowingDetailsSaga, {
      payload: {
        userName: data?.login,
        perPage: 4,
        page: 1,
        totalFollowing: data?.following
      }
    });
  } catch (error) {
    yield put(
      fetchUserDataError({ info: error?.response?.data?.message, route: true })
    );
  }
}

export function* fetchUserDetailsWatcher() {
  yield takeLatest(fetchUserData.type, fetchUserDetailsSaga);
}
