import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.css";
import { mainLogo } from "../../assets/index";
import { SearchInputContainer } from "../../components/searchInputContainer/SearchInputContainer";
import { fetchUserData, toggleNavigation } from "../../redux/user/userSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { navigateToPage, status } = useSelector((state) => state.userInfo);

  const [userName, setUserName] = useState("");

  const handleButtonClick = () => {
    if (userName.length) {
      dispatch(fetchUserData(userName));
    }
  };

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  useEffect(() => {
    if (navigateToPage) {
      if (status === "success") {
        navigate("/about");
      }
      if (status === "error") {
        navigate("/error");
      }
      dispatch(toggleNavigation(false));
    }
  }, [navigateToPage, navigate, dispatch, status]);

  return (
    <div className={styles.homeWrapper}>
      <img
        src={mainLogo}
        alt="dfdf"
        width={300}
        height={300}
        className={styles.mainLogoStyling}
      />
      <div className={styles.contentDiv}>
        <h2 className={styles.subHeaderStyling}>
          Discover GitHub Profiles Easily
        </h2>
        <div className={styles.searchDiv}>
          <SearchInputContainer
            inputValue={userName}
            placeholderText={"Enter UserName"}
            handleChange={handleInputChange}
            onBtnClick={handleButtonClick}
          />
        </div>
      </div>
    </div>
  );
};
