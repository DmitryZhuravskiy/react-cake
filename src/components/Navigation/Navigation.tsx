import React from "react";
import styles from "./Navigation.module.scss";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  return (
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link
          to="/"
          className={
            location.pathname === "/"
              ? styles.navigationLinkActive
              : styles.navigationLink
          }
        >
          Главная
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link
          to="fag"
          className={
            location.pathname === "/fag"
              ? styles.navigationLinkActive
              : styles.navigationLink
          }
        >
          Часто задаваемые вопросы
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link
          to="work"
          className={
            location.pathname === "/work"
              ? styles.navigationLinkActive
              : styles.navigationLink
          }
        >
          Вакансии
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
