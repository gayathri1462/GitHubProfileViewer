import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Pagination } from "../pagination/Pagination";
import { BsGithub } from "react-icons/bs";
import styles from "./UserList.module.css";
import { useEffect } from "react";
import { fetchFollowingData } from "../../redux/following/followingSlice";
import { fetchFollowersData } from "../../redux/followers/followersSlice";

interface userFollowersData {
  login: string;
  avatar_url: string;
  html_url: string;
}

export const UserList = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const isFollowing = location.pathname.includes("following");

  const isFollowingLoading =
    useSelector((state: any) => state?.followingInfo?.status) === "loading";
  const isFollowersLoading =
    useSelector((state: any) => state?.followersInfo?.status) === "loading";

  const isLoading = isFollowersLoading || isFollowingLoading;

  const { login, following, followers } = useSelector(
    (state: any) => state.userInfo.data
  );
  const followingData = useSelector((state: any) => state?.followingInfo?.data);
  const followersData = useSelector((state: any) => state?.followersInfo?.data);

  const [userListData, setUserListData] = useState({
    usersData: [],
    totalNoPages: 1,
    currentPage: 1
  });

  const NoData = (
    <div className={styles.noDataStyling}>
      <h1>No {isFollowing ? "Following" : "Followers"} Data Found</h1>
    </div>
  );

  const Loading = (
    <div className={styles.loadingStyling}>
      <h1>Loading... </h1>
    </div>
  );

  const handlePageChange = (page: any) => {
    const newPage = Number(page.selected) + 1;
    if (userListData?.currentPage !== newPage) {
      if (isFollowing) {
        dispatch(
          fetchFollowingData({
            userName: login,
            perPage: 4,
            page: newPage,
            totalFollowing: following
          })
        );
      } else {
        dispatch(
          fetchFollowersData({
            userName: login,
            perPage: 4,
            page: newPage,
            totalFollowers: followers
          })
        );
      }
    }
  };

  useEffect(() => {
    if (followersData) {
      if (isFollowing) {
        setUserListData({
          usersData: followingData?.followingList,
          totalNoPages: followingData?.totalFollowingPages,
          currentPage: followingData?.currentPageNo
        });
      } else {
        setUserListData((prevData) => ({
          ...prevData,
          usersData: followersData?.followersList,
          totalNoPages: followersData?.totalFollowersPages,
          currentPage: followersData?.currentPageNo
        }));
      }
    }
  }, [location.pathname, isFollowing, followingData, followersData]);

  return (
    <div className={styles.userInfoCardWrapper}>
      <div className={styles.userInfoCardsDiv}>
        {!isLoading
          ? userListData?.usersData?.length
            ? userListData?.usersData?.map(
                (data: userFollowersData, index: number) => {
                  return (
                    <div key={index} className={styles.userInfoCardDiv}>
                      <div>
                        <img
                          src={data?.avatar_url}
                          alt={data?.login}
                          width={50}
                          height={50}
                        />
                      </div>
                      <div>
                        {data?.login && (
                          <p className={styles.loginStyling}>@{data?.login}</p>
                        )}
                      </div>
                      <div>
                        {data?.html_url && (
                          <a
                            href={data?.html_url}
                            target="_blank"
                            rel={"noreferrer"}
                          >
                            <BsGithub
                              style={{ color: "#0079ff", fontSize: "1.25em" }}
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                }
              )
            : NoData
          : Loading}
      </div>
      {userListData?.totalNoPages > 1 && (
        <Pagination
          onPageChange={handlePageChange}
          pageCount={Number(userListData?.totalNoPages)}
          forcePage={Number(userListData?.currentPage - 1)}
        />
      )}
    </div>
  );
};
