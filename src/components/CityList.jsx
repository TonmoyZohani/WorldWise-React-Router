import React, { useContext } from "react";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import { CitiesContext } from "../contexts/CitiesProvider";

const CityList = () => {
  const { cities } = useContext(CitiesContext);

  return (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </div>
  );
};

export default CityList;
