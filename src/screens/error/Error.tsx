import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./Error.module.css";
import { errorImg } from "../../assets/index";
import { clearUserInfo } from "../../redux/user/userSlice";

interface ErrorProps {
  isApiError?: boolean;
}

export const Error = ({ isApiError }: ErrorProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBackButton = () => {
    if (isApiError) {
      dispatch(clearUserInfo());
    }
    navigate("/");
  };

  return (
    <div className={styles.errorWrapper}>
      <img src={errorImg} alt="error" width="300" height="300" />
      <h1>
        Oops! It looks like the {isApiError ? "user" : "page"} you're looking
        for doesn't exist.
      </h1>
      <button className={styles.backButtonStyling} onClick={handleBackButton}>
        {" "}
        Go Home
      </button>
    </div>
  );
};
