import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../redux/slices/filterSlice";

const Sort: React.FC = React.memo(() => {
  const sort = useSelector((state: any) => state.filter.sort);
  const dispatch = useDispatch();
  const list = ["rating", "price", "title"];
  const [sortWindow, tongleSortWindow] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const onClickListItem = (type: any) => {
    dispatch(setSort(type));
    tongleWindow();
  };

  const tongleWindow = () => {
    if (sortWindow) {
      tongleSortWindow(false);
    } else {
      tongleSortWindow(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!e.composedPath().includes(sortRef.current)) {
        tongleSortWindow(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label" onClick={() => tongleWindow()}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span>
          {sort === "rating"
            ? "популярности"
            : sort === "price"
            ? "цене"
            : sort === "title"
            ? "алфавиту"
            : ""}
        </span>
      </div>
      {sortWindow && (
        <div className="sort__popup">
          <ul>
            {list.map((one, i) => (
              <li
                key={i}
                className={sort === one ? "active" : ""}
                onClick={() => onClickListItem(one)}
              >
                {one === "rating"
                  ? "популярности"
                  : one === "price"
                  ? "цене"
                  : one === "title"
                  ? "алфавиту"
                  : ""}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default Sort;
