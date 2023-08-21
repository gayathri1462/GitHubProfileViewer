import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  fetchFollowersData,
  fetchFollowersDataSuccess,
  fetchFollowersDataError
} from "./followersSlice";

export function* fetchFollowersDetailsSaga(action) {
  try {
    const { userName, perPage, page, totalFollowers } = action.payload;

    const response = yield call(
      axios.get,
      `https://api.github.com/users/${userName}/followers`,
      {
        params: {
          per_page: perPage,
          page: page
        }
      }
    );
    const data = response?.data;
    const selectedKeys = ["login", "avatar_url", "html_url"];

    const filteredData = data?.map((user) => {
      return selectedKeys.reduce(
        (acc, key) => ({ ...acc, [key]: user[key] }),
        {}
      );
    });

    yield put(
      fetchFollowersDataSuccess({
        followersList: [...Object.values(filteredData)],
        totalFollowersPages: Math.ceil(totalFollowers / perPage),
        currentPageNo: page
      })
    );
  } catch (error) {
    yield put(fetchFollowersDataError(error?.response?.data?.message));
  }
}

export function* fetchFollowersDetailsWatcher() {
  yield takeLatest(fetchFollowersData.type, fetchFollowersDetailsSaga);
}
