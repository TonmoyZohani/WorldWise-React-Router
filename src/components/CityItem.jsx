import React from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const CityItem = ({ city }) => {
  console.log(city);

  const {id} = city;

  return (
    <li className={styles.cityItem}>
      <Link to={`${id}`}>
        <span className={styles.emoji}>{city.emoji}</span>
        <h3 className={styles.name}>{city.cityName}</h3>
        <time className={styles.date}>{city.date}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
};

export default CityItem;
