import { useSelector } from "react-redux";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import styles from "./UserStats.module.css";
import { StatCard } from "../statCard/StatCard";
import { ToggleTab } from "../../styledComponents/index";
import { RiGitRepositoryFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";

interface CardData {
  bgColor: string;
  icon: any;
  name: string;
  count: number;
  color?: string;
}

export const UserStats = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { public_repos, public_gists, followers, following } = useSelector(
    (state: any) => state?.userInfo?.data
  );

  const userStatsInfo = [
    {
      name: "Public Repos",
      count: public_repos,
      icon: (
        <RiGitRepositoryFill style={{ color: "#ff6600", fontSize: "1.5em" }} />
      ),
      color: "#ff6600",
      bgColor: "#ffb366"
    },
    {
      name: "Followers",
      count: followers,
      icon: <FaUsers style={{ color: "#4caf50", fontSize: "1.5em" }} />,
      color: "#4caf50",
      bgColor: "#a5d6a7"
    },
    {
      name: "Following",
      count: following,
      icon: <FaUserCheck style={{ color: "#e91e63", fontSize: "1.5em" }} />,
      color: "#e91e63",
      bgColor: "#f48fb1"
    },
    {
      name: "Public Gists",
      count: public_gists,
      icon: <FaFileCode style={{ color: "#9b59b6", fontSize: "1.5em" }} />,
      color: "#9b59b6",
      bgColor: "#d7bde2"
    }
  ];

  return (
    <div className={styles.userStatsWrapper}>
      <div className={styles.statCardsDiv}>
        {userStatsInfo?.map((data: CardData, index: number) => {
          return (
            <div key={index}>
              <StatCard cardData={data} />
            </div>
          );
        })}
      </div>

      <div className={styles.statsListDiv}>
        <ToggleTab
          onClick={() => navigate("/about/followers")}
          isActive={!location.pathname.includes("following")}
        >
          Followers
        </ToggleTab>
        <ToggleTab
          onClick={() => navigate("/about/following")}
          isActive={location.pathname.includes("following")}
        >
          Following
        </ToggleTab>
      </div>
      <Outlet />
    </div>
  );
};
