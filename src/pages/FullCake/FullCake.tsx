import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./FullCake.module.scss";

const FullCake: React.FC = () => {
  const [cakes, setCakes] = useState<{
    imageUrl: string;
    price: number;
    title: string;
    description: string;
  }>();
  const { id } = useParams();

  useEffect(() => {
    async function fetchCakes() {
      try {
        const { data } = await axios.get(
          `https://630752833a2114bac75f4277.mockapi.io/cakes/` + id
        );
        setCakes(data);
      } catch (error) {
        alert(error);
      }
    }
    fetchCakes();
  }, []);

  if (cakes === undefined) {
    return <div>Работаем, братья</div>;
  }
  return (
    <div className={styles.fullCake}>
      <h2 className={styles.fullCakeTitle}>{cakes.title} </h2>
      <img src={cakes.imageUrl} alt={cakes.title} className={styles.fullCakeImage} />
      <p className={styles.fullCakeDescription}>{cakes.description}</p>
      <h4 className={styles.fullCakePrice}>{cakes.price} Р.</h4>
    </div>
  );
};

export default FullCake;
