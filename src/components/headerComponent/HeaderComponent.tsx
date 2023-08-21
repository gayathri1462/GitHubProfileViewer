import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderComponent.module.css";
import { Tab } from "../../styledComponents/index";
import { BsGithub } from "react-icons/bs";

export const HeaderComponent = ({ isNavLinkEnable }: any) => {
  return (
    <nav className={styles.navBarWrapper}>
      <Link to="/" className={styles.logoLinkStyling}>
        <div className={styles.logo}>
          <BsGithub style={{ fontSize: "2em" }} />
          <h1 className={styles.appName}>GitHub Profile Viewer</h1>
        </div>
      </Link>
      <ul className={styles.navLinks}>
        <Tab to="/" id="home-link">
          Home
        </Tab>
        {isNavLinkEnable ? (
          <Tab to={"/about"} id="about-link">
            About
          </Tab>
        ) : null}
      </ul>
    </nav>
  );
};
