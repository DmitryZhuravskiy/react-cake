import React, { useRef, useCallback, useState } from "react";
import styles from "./Search.module.scss";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 1000),
    []
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement> ) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const cleanSearchValue = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  return (
    <div className={styles.wrapper}>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="Поиск блюда"
        value={value}
        onChange={(e) => onChangeInput(e)}
      />
      <div className={styles.christ} onClick={(e) => cleanSearchValue(e)}>
        <div className={styles.leftStrike}></div>
        <div className={styles.rightStrike}></div>
      </div>
    </div>
  );
};

export default Search;
