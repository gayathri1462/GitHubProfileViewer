import { useSelector } from "react-redux";
import moment from "moment";
import styles from "./UserInfo.module.css";
import { RiUserLocationFill } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";

export const UserInfo = () => {
  const {
    avatar_url,
    name,
    bio,
    location,
    company,
    created_at,
    updated_at,
    login,
    hireable,
    html_url,
    email,
    blog,
    twitter_username
  } = useSelector((state: any) => state.userInfo.data);

  return (
    <div className={styles.userInfoWrapper}>
      <div className={styles.userTopDiv}>
        <img src={avatar_url} alt={name} width={200} height={200} />
        <div className={styles.userTopInfoDiv}>
          <h1>{name}</h1>
          {login && <h4>@{login}</h4>}
          {hireable !== null && (
            <p className={styles.hireableStyling}>
              {hireable ? "Available for Hire" : "Not Available for Hire"}
            </p>
          )}
          {created_at && (
            <p className={styles.joinedAtStyling}>
              Joined At: <span>{moment(created_at).format("ll")}</span>
            </p>
          )}
        </div>
      </div>
      <div className={styles.userDetailsDiv}>
        {location && (
          <div className={styles.iconTextDiv}>
            <RiUserLocationFill
              style={{ color: "#0079ff", fontSize: "1.5em" }}
            />{" "}
            <p>{location}</p>
          </div>
        )}
        {bio && <p>{bio}</p>}
        {company && <p>Company: {company}</p>}
        {updated_at && (
          <div className={styles.iconTextDiv}>
            <IoMdTime style={{ color: "#0079ff", fontSize: "1.25em" }} />{" "}
            <p>Last Updated: {moment(updated_at).format("lll")}</p>
          </div>
        )}
        <div className={styles.columnFlexStyling}>
          <h4>Follow on</h4>
          <div className={styles.iconColDiv}>
            {twitter_username && (
              <div className={styles.iconColDiv}>
                <AiOutlineTwitter
                  style={{ color: "#0079ff", fontSize: "1.5em" }}
                />
                <p>{twitter_username}</p>
              </div>
            )}
            {email && (
              <div className={styles.iconColDiv}>
                <MdEmail style={{ color: "#0079ff", fontSize: "1.25em" }} />{" "}
                <p>{email}</p>
              </div>
            )}
          </div>
          <div className={styles.iconColDiv}>
            {html_url && (
              <div className={styles.iconColDiv}>
                <a href={html_url} target="_blank" rel={"noreferrer"}>
                  <BsGithub style={{ color: "#0079ff", fontSize: "1.25em" }} />
                </a>
              </div>
            )}
            {blog && (
              <div className={styles.iconColDiv}>
                <a href={blog} target="_blank" rel={"noreferrer"}>
                  <FaBloggerB
                    style={{ color: "#0079ff", fontSize: "1.25em" }}
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
