import styles from "./SearchInputContainer.module.css";
import { Button } from "../../styledComponents/index";

interface InputProps {
  inputValue: string;
  placeholderText: string;
  inputProps?: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBtnClick: () => void;
}

export const SearchInputContainer = ({
  inputValue,
  placeholderText,
  handleChange,
  inputProps,
  onBtnClick
}: InputProps) => {
  return (
    <div className={styles.searchBoxWrapper}>
      <input
        type={"text"}
        className={styles.searchInputStyling}
        placeholder={placeholderText}
        value={inputValue}
        onChange={handleChange}
        {...inputProps}
      />
      <Button inputValue={inputValue.length} onClick={onBtnClick}>
        Search
      </Button>
    </div>
  );
};
