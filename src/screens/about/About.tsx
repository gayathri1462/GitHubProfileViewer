import React from "react";
import styles from "./About.module.css";
import { UserInfo } from "../../components/userInfo/UserInfo";
import { UserStats } from "../../components/userStats/UserStats";

export const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <UserInfo />
      <UserStats />
    </div>
  );
};
