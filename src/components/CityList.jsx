import React from "react";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";

const CityList = ({ cities }) => {
  console.log(cities);

  return (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id}/>
      ))}
    </div>
  );
};

export default CityList;
