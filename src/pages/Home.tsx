import React, { useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import CakeBlock from "../components/CakeBlock";
import Skeleton from "../components/Skeleton";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import {
  selectorFilter,
  setCategoryId,
  setFilter,
} from "../redux/slices/filterSlice";
import { fetchCakes, selectorCake } from "../redux/slices/cakeSlice";
import Navigation from "../components/Navigation/Navigation";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, status } = useSelector(selectorCake);
  const { categoryId, sort, searchValue } = useSelector(selectorFilter);
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const search = searchValue ? `&search=${searchValue}` : "";

  const setNewCategory = useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  const fetchPizzas = async () => {
    // @ts-ignore
    dispatch(fetchCakes({ categoryId, sort, search }));
    window.scrollTo(0, 0);
  };

  // Если был первый рендер, проверяем url параметры и сохраняем в редаксе
  useEffect(() => {
    const params = qs.parse(window.location.search.substring(1));
    dispatch(
      setFilter({
        searchValue: params.search,
        categoryId: Number(params.category),
        sort: sort || "rating",
      })
    );
    isSearch.current = true;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchPizzas();
    }
    isSearch.current = false;
  }, [categoryId, sort, searchValue]);

  useEffect(() => {
    const queryString = qs.stringify({
      name: sort,
      categoryId,
    });
    navigate(`?${queryString}`);
  }, [categoryId, sort, searchValue]);

  // Если изменили параметры и был первый рендер
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        name: sort,
        categoryId,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort, searchValue]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories changeCategory={setNewCategory} activeIndex={categoryId} />
        <Sort />
      </div>
      <h2 className="content__title">Ассортимент</h2>
      <div className="content__items">
        {status === "error" && (
          <div>
            <h2>Произошла ошибка</h2>
            <p>
              Вероятнее всего, произошла какая-то ошибка связанная с отправкой
              данных запроса
            </p>
          </div>
        )}
        {status === "loading" ? (
          [...new Array(6)].map((el, index) => <Skeleton key={index} />)
        ) : items !== undefined ? (
          items.map((cake: any) => <CakeBlock {...cake} key={cake.id} />)
        ) : (
          <div>Loading a new cake</div>
        )}
      </div>
    </div>
  );
};

export default Home;
