import React, { useMemo, useState } from "react";

type ICategories = {
  activeIndex: number;
  changeCategory: (value: number) => void;
};

const Categories: React.FC<ICategories> = React.memo(
  ({ activeIndex, changeCategory }) => {
    const categoryArr = [
      "Все",
      "Бургеры",
      "Роллы",
      "Картошка",
      "Десерты",
      "Напитки",
    ];

    return (
      <div className="categories">
        <ul>
          {categoryArr.map((category, i) => (
            <li
              className={activeIndex === i ? "active" : ""}
              onClick={() => changeCategory(i)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default Categories;
