import React, { useState, Children } from "react";
import styles from "./FagComponent.module.scss";

const FagComponent = ( titleText:string ) => {
  const [oneOne, changeOneOne] = useState(false);

  const tongleOneOne = () => {
    if (oneOne !== false) {
      changeOneOne(false);
    } else {
      changeOneOne(true);
    }
  };

  return (
    <article className={styles.articleBorder}>
      <h5 className={styles.subTitle} onClick={() => tongleOneOne()}>
        {titleText}
        <div className={styles.chest}>
          <p className={oneOne ? styles.strike1Open : styles.strike1}></p>
          <p className={oneOne ? styles.strike2Open : styles.strike2}></p>
        </div>
      </h5>
    </article>
  );
};

export default FagComponent;
