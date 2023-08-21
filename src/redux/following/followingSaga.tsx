import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  fetchFollowingData,
  fetchFollowingDataSuccess,
  fetchFollowingDataFailure
} from "./followingSlice";

export function* fetchFollowingDetailsSaga(action) {
  try {
    const { userName, perPage, page, totalFollowing } = action.payload;
    const response = yield call(
      axios.get,
      `https://api.github.com/users/${userName}/following`,
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
      fetchFollowingDataSuccess({
        followingList: [...Object.values(filteredData)],
        totalFollowingPages: Math.ceil(totalFollowing / perPage),
        currentPageNo: page
      })
    );
  } catch (error) {
    yield put(fetchFollowingDataFailure(error?.response?.data?.message));
  }
}

export function* fetchFollowingDetailsWatcher() {
  yield takeLatest(fetchFollowingData.type, fetchFollowingDetailsSaga);
}
