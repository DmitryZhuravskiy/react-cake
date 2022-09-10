import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

type CakeBlockProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  rating: number;
};

type CakeBlockItemProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  size: number;
  count: number;
};

const CakeBlock: React.FC<CakeBlockProps> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
}) => {
  const dispatch = useDispatch();
  let countOur = 0;
  const cartItem = useSelector((state: any) =>
    state.cart.items.find((obj: any) => obj.id === id)
  );

  const onClickAdd = () => {
    const item: CakeBlockItemProps = {
      id,
      title,
      price,
      imageUrl,
      size: sizes[0],
      count: countOur,
    };
    dispatch(addItems(item));
  };

  return (
    <div className="pizza-block">
      <Link to={`cake/${id}`}>
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
      </Link>
      <div className="pizza-block__selector">
        <ul>
          <li
          >
            {sizes[0]}
          </li>
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <button
          onClick={() => onClickAdd()}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {cartItem !== undefined && (
            <i>{cartItem === undefined ? "" : cartItem.count}</i>
          )}
        </button>
      </div>
    </div>
  );
};

export default CakeBlock;
